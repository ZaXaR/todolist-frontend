'use client';

import { Button } from '@/compontents/ui/buttons/Button';
import { useProfile } from '@/hooks/useProfile';
import { authService } from '@/services/auth.service';
import { getGravatarUrl } from '@/utils/getGravatarUrl';
import Image from 'next/image';

export function Profile() {
  const { data, isLoading } = useProfile();

  const handleLogout = async () => {
    try {
      await authService.logout();
      window.location.reload();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return isLoading ? (
    <div className="max-w-xs mx-auto p-6 flex flex-col items-center space-y-4 text-lg">Loading Profile...</div>
  ) : (
    <div className="max-w-xs mx-auto p-6 flex flex-col items-center space-y-4">
      <Image
        src={getGravatarUrl(data?.user.email || '')}
        alt="User avatar"
        width={100}
        height={100}
        className="rounded-full border-4 border-blue-500 object-cover"
      />

      <div className="text-center space-y-1">
        <h2 className="text-lg font-semibold text-blue-600">
          {data?.user.name}
        </h2>
        <p className="text-sm text-gray-500">{data?.user.email}</p>
      </div>

      <Button
        onClick={handleLogout}
        className="mt-2 w-full bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-medium"
      >
        Logout
      </Button>
    </div>
  );
}
