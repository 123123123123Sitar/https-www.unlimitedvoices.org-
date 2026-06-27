-- Add the remaining wallet balances to profiles.
alter table public.profiles
  add column if not exists coins int not null default 0,
  add column if not exists gems  int not null default 0;
