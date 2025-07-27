'use client'

import { useProfile } from '@/hooks/useProfile';

export function Profile() {
        const { data, isLoading } = useProfile()
        console.log(data);

        return <div></div>
}
