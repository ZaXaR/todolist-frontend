'use client'

import { useProfile } from '@/hooks/useProfile';

export function Profile() {
  const { data, isLoading } = useProfile();

  return isLoading ? (
    <div className="text-gray-300 text-sm">Loading Profile...</div>
  ) : (
    <div className="bg-gray-800 text-gray-100 p-4 rounded-lg shadow-md space-y-2">
      <h4 className="text-sm text-gray-400">📧 {data?.user.email}</h4>
      <h3 className="text-xl font-semibold">{data?.user.name}</h3>
    </div>
  );
}