-- Unlimited Voices — initial schema
-- Run in the Supabase SQL editor, or `supabase db push` with the CLI linked.

-- ---------------------------------------------------------------------------
-- contacts: the public contact form writes here. Anyone may insert; nobody
-- can read via the anon/authenticated API (reads stay server/admin only).
-- ---------------------------------------------------------------------------
create table if not exists public.contacts (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  email      text not null,
  message    text not null,
  created_at timestamptz not null default now()
);

alter table public.contacts enable row level security;

drop policy if exists "anyone can submit a contact message" on public.contacts;
create policy "anyone can submit a contact message"
  on public.contacts
  for insert
  to anon, authenticated
  with check (true);

-- ---------------------------------------------------------------------------
-- profiles: one row per auth user, holding the learning-wallet fields.
-- ---------------------------------------------------------------------------
create table if not exists public.profiles (
  id           uuid primary key references auth.users (id) on delete cascade,
  display_name text,
  level        int  not null default 1,
  xp           int  not null default 0,
  merit        int  not null default 0,
  streak       int  not null default 0,
  created_at   timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "users can view their own profile" on public.profiles;
create policy "users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "users can update their own profile" on public.profiles;
create policy "users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- ---------------------------------------------------------------------------
-- Auto-create a profile row whenever a new auth user signs up.
-- ---------------------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, display_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', split_part(new.email, '@', 1))
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
