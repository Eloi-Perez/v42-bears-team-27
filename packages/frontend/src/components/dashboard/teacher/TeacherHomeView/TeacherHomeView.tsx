import { useContext } from 'react';

import {
  BroadcastModal,
  ClassroomModal,
} from 'src/components/dashboard/modals';
import TeacherCalendar from 'src/components/dashboard/teacher/TeacherCalendar';
import StudentTable from 'src/components/dashboard/teacher/StudentTable';
import type { ITeacher } from 'src/interfaces';
import { AuthContext } from 'src/store/auth';

const TeacherHomeView = () => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      {authCtx?.user && (
        <p sx={{ variant: 'text.h3', color: 'primary', textAlign: 'center' }}>
          {`Good Morning, ${(authCtx.user as ITeacher).title}.${
            (authCtx.user as ITeacher).surname
          }`}
        </p>
      )}
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          columnGap: 3,
          mb: [4, null, 0],
        }}
      >
        <BroadcastModal />
        <ClassroomModal />
      </div>
      <div
        sx={{
          display: 'flex',
          flexDirection: ['column', null, 'row'],
          alignItems: ['center', 'start', 'center'],
          justifyContent: 'space-between',
          columnGap: 3,
          mt: [3, null, 4],
        }}
      >
        <TeacherCalendar />
        <StudentTable />
      </div>
    </>
  );
};

export default TeacherHomeView;