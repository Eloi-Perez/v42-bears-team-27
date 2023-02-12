import { ReactElement, useContext } from 'react';
import { MdLogout } from 'react-icons/md';

import AuthLayout from 'src/layouts/AuthLayout';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  Button,
} from 'src/components/ui';
import { StudentAppBar, StudentBottomNav } from 'src/components/dashboard/navs';
import ClassroomModal from 'src/components/dashboard/modals/ClassroomModal';
import { AuthContext } from 'src/store/auth';
import type { NextPageWithLayout } from '../../_app';

const Profile: NextPageWithLayout = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
      }}
    >
      <StudentAppBar />
      <div sx={{ overflowY: 'auto' }}>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            rowGap: 3,
          }}
        >
          <AlertDialog>
            <AlertDialogTrigger sx={{ color: 'text' }} asChild>
              <Button icon={<MdLogout />}>Logout</Button>
            </AlertDialogTrigger>
            <AlertDialogContent
              sx={{
                textAlign: 'center',
                py: 4,
                '& button': {
                  mt: 4,
                },
                '& div': {
                  justifyContent: 'center !important',
                },
              }}
              title="Are you sure you want to logout?"
              description=""
              width="32rem"
              height="min-content"
              onConfirm={() => authCtx?.onLogout()}
            />
          </AlertDialog>
          <ClassroomModal />
        </div>
      </div>
      <StudentBottomNav />
    </div>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthLayout
      title="Profile"
      description="An overview of your stats as a student in your classroom"
    >
      {page}
    </AuthLayout>
  );
};

export default Profile;
