import { UserProfile } from '@/libs/interfaces';
import { cn } from '@/libs/utils';

interface AsideUserProps {
  className?: string;
}

const userProfile: UserProfile = {
  avatarUrl: 'https://i.pravatar.cc/300',
  firstName: 'Jhon',
  lastName: 'Doe',
  email: 'jhondoe@example.com',
};

const initials =
  userProfile.firstName.charAt(0) + userProfile.lastName.charAt(0);

export const AsideUser = ({ className }: AsideUserProps) => (
  <div className={cn('flex flex-col items-center', className)}>
    {!userProfile.avatarUrl && (
      <div className='mb-1 flex size-16 items-center justify-center rounded-full bg-light'>
        <span className='text-xl uppercase text-n-0'>{initials}</span>
      </div>
    )}
    {userProfile.avatarUrl && (
      <img
        className='mb-1 size-16 rounded-full bg-light'
        src={userProfile.avatarUrl}
        alt={userProfile.firstName + ' ' + userProfile.lastName}
      />
    )}
    <span className='font-montserrat text-sm text-light'>
      {userProfile.email}
    </span>
  </div>
);
