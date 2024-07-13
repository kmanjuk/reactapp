import ReactDOM from 'react-dom'
import { Contact2 } from './Contact2'

test('render Contact2 component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Contact2 />, div)
})

test('render Contact2 component with login', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Contact2
      isLoggedIn={true}
      authData={{
        isLoggedIn: true,
        authentication: {
          name: 'Kumar Manju M',
          email: 'kmannju@gmail.com',
          profileImg:
            'https://lh3.googleusercontent.com/a/ALm5wu2Yp9x_YUCje0pE66OzfsIEthJRRlPNd-Olt6XK=s96-c',
          tokenObject: {
            token_type: 'Bearer',
            login_hint:
              'AJDLj6JUa8yxXrhHdWRHIV0S13cA09OaQfpIjUCnKKAjJ7VSNuDKY0EKF4F4P2spd0qUGas-l7ttpgbRDTW6798_aW5BSI1gCg',
            expires_in: 3599,
            id_token:
              'eyJhbGciOiJSUzI1NiIsImtpZCI6IjcxM2ZkNjhjOTY2ZTI5MzgwOTgxZWRjMDE2NGEyZjZjMDZjNTcwMmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNDE4OTI1ODU2ODAtMXBrbmoxY2lkamtxb3JtbHM4ajRxYmE4aGRicm5vdjYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0MTg5MjU4NTY4MC0xcGtuajFjaWRqa3Fvcm1sczhqNHFiYThoZGJybm92Ni5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwMzY0NzY4OTA5ODExNTYxNjE2OCIsImVtYWlsIjoia21hbm5qdUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6Im5YdzFOUjhMTlY2cHpoT0t3YnZ5YXciLCJuYW1lIjoiS3VtYXIgTWFuanUgTSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BTG01d3UyWXA5eF9ZVUNqZTBwRTY2T3pmc0lFdGhKUlJsUE5kLU9sdDZYSz1zOTYtYyIsImdpdmVuX25hbWUiOiJLdW1hciBNYW5qdSIsImZhbWlseV9uYW1lIjoiTSIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjY4NjkyNTIzLCJleHAiOjE2Njg2OTYxMjMsImp0aSI6IjU0NmYxYTIwMzM3MDVlMTJkMjhhMzYwOGEyMTEyNjE3YjA2ZDI5ZDEifQ.RGIdoyhjHg3AHAjoGb9PLWctJnekICeRSy-tPp8A4lazetvTI0_59iD9dZF8rjEqEgrLZO7Ik-uh6idjYsJGZBRnVikGplnwMx2G6cibprJwDfI_koqZrdDArmaDVjL2G0LtC30VojGeaAp5QI4piozvFZOZYk_RP1c5H44hu8atN4OUi7vQt-0cbrvZSGhq0XqphoClp8CL1zjAKhIgWDTIh01XDAxvDBDsg0s1UPy2HTpxnauWT3fO4W5STNy_BWJgcp3dOLZ1jY93eSg6m3Klrelk7BuTdpZ2dMjm2JZsp2H6z8P_5VR5eGO8IWUpyn2VE8kDt9z5wldWFMBPsQ',
            session_state: {
              extraQueryParams: {
                authuser: '0',
              },
            },
            first_issued_at: 1668692523343,
            expires_at: 1668696122343,
            idpId: 'google',
          },
          profile: {
            NT: '103647689098115616168',
            Ad: 'Kumar Manju M',
            rV: 'Kumar Manju',
            uT: 'M',
            hK: 'https://lh3.googleusercontent.com/a/ALm5wu2Yp9x_YUCje0pE66OzfsIEthJRRlPNd-Olt6XK=s96-c',
            cu: 'kmannju@gmail.com',
          },
        },
        tokenSource: 'google',
        dependeciesFormAPIS: {},
        session: {
          user: {
            userId: '114E8485-D1D0-4E27-9FC6-7D2D233D529D',
            userName: 'kmannju@gmail.com',
            userType: null,
            userLastName: 'M',
            userFirstName: 'Kumar Manju',
            userFullName: 'Kumar Manju M',
            startDate: '2022-09-04T06:34:26.060Z',
            endDate: null,
            oAuth_iss: 'accounts.google.com',
            oAuth_sub: '103647689098115616168',
            email: 'kmannju@gmail.com',
            pictureURL: null,
            active: true,
            tenantId: 'FF14E12C-5C9B-4F9E-8DEF-321D05DFBE08',
            appId: 'A5B7ED25-A6E7-46C3-990C-B7A0C1590B33',
            lastUpdatedDateTime: '2022-09-04T06:34:26.060Z',
            userRoles: [
              {
                roleName: 'AppUser',
                roleId: 'AF31655A-065A-462C-84B7-3E166F41BAFE',
                UserRole: {
                  userRoleId: 'E50476C9-9498-448D-BDE5-2C4FFD6B32E1',
                  userId: '114E8485-D1D0-4E27-9FC6-7D2D233D529D',
                  roleId: 'AF31655A-065A-462C-84B7-3E166F41BAFE',
                  tenantId: 'FF14E12C-5C9B-4F9E-8DEF-321D05DFBE08',
                  appId: 'A5B7ED25-A6E7-46C3-990C-B7A0C1590B33',
                  sendUserMessageEmail: false,
                  lastUpdatedDateTime: '2022-09-04T06:34:26.096Z',
                },
              },
              {
                roleName: 'SysAdmin',
                roleId: '66CCDE0B-4BA4-4056-967A-5662730F0407',
                UserRole: {
                  userRoleId: 'CC633196-54CE-4509-B0F9-AEF43B8148C2',
                  userId: '114E8485-D1D0-4E27-9FC6-7D2D233D529D',
                  roleId: '66CCDE0B-4BA4-4056-967A-5662730F0407',
                  tenantId: 'FF14E12C-5C9B-4F9E-8DEF-321D05DFBE08',
                  appId: 'A5B7ED25-A6E7-46C3-990C-B7A0C1590B33',
                  sendUserMessageEmail: false,
                  lastUpdatedDateTime: '2022-10-15T16:47:09.813Z',
                },
              },
              {
                roleName: 'AppAdmin',
                roleId: '6441B35A-8CEB-4AF3-9C8E-0638092C4D69',
                UserRole: {
                  userRoleId: 'D112D261-A6E1-4445-943E-B083D9858667',
                  userId: '114E8485-D1D0-4E27-9FC6-7D2D233D529D',
                  roleId: '6441B35A-8CEB-4AF3-9C8E-0638092C4D69',
                  tenantId: 'FF14E12C-5C9B-4F9E-8DEF-321D05DFBE08',
                  appId: 'A5B7ED25-A6E7-46C3-990C-B7A0C1590B33',
                  sendUserMessageEmail: false,
                  lastUpdatedDateTime: '2022-09-28T12:43:32.470Z',
                },
              },
              {
                roleName: 'Terminal',
                roleId: 'F03992D5-A07B-4312-99EF-67A5F821393B',
                UserRole: {
                  userRoleId: '28659042-5C97-4EB0-AE7E-EEFAE7FF851C',
                  userId: '114E8485-D1D0-4E27-9FC6-7D2D233D529D',
                  roleId: 'F03992D5-A07B-4312-99EF-67A5F821393B',
                  tenantId: 'FF14E12C-5C9B-4F9E-8DEF-321D05DFBE08',
                  appId: 'A5B7ED25-A6E7-46C3-990C-B7A0C1590B33',
                  sendUserMessageEmail: false,
                  lastUpdatedDateTime: '2022-09-23T05:44:31.980Z',
                },
              },
            ],
            UserFamily: [
              {
                userFamilyId: 'A58A4297-E5FA-4645-B152-9502E99F0B06',
                userId: '114E8485-D1D0-4E27-9FC6-7D2D233D529D',
                userFamilyMemberName: 'Kumar Manju M',
                userFamilyMemberRelationship: 'SELF',
                userFamilyMemberEmail: 'kmannju@gmail.com',
                userFamilyMemberInviteStatus: null,
                userFamilyMemberCellphone: null,
                userFamilyMemberHomephone: null,
                userFamilyMemberAltPhone: null,
                userFamilyMemberIsFamily: true,
                userFamilyMemberIsEmContact: false,
                userFamilyMemberPickupPermissions: true,
                userFamilyMemberStreetAddress: null,
                userFamilyMemberCity: null,
                userFamilyMemberState: null,
                userFamilyMemberZipCode: null,
                lastUpdatedDateTime: '2022-09-04T06:34:26.130Z',
              },
            ],
            rowFormData: [
              {
                userRoleId: '28659042-5C97-4EB0-AE7E-EEFAE7FF851C',
                userId: '114E8485-D1D0-4E27-9FC6-7D2D233D529D',
                roleId: 'F03992D5-A07B-4312-99EF-67A5F821393B',
                tenantId: 'FF14E12C-5C9B-4F9E-8DEF-321D05DFBE08',
                appId: 'A5B7ED25-A6E7-46C3-990C-B7A0C1590B33',
                sendUserMessageEmail: false,
                lastUpdatedDateTime: '2022-09-23T05:44:31.980Z',
              },
              {
                userRoleId: 'E50476C9-9498-448D-BDE5-2C4FFD6B32E1',
                userId: '114E8485-D1D0-4E27-9FC6-7D2D233D529D',
                roleId: 'AF31655A-065A-462C-84B7-3E166F41BAFE',
                tenantId: 'FF14E12C-5C9B-4F9E-8DEF-321D05DFBE08',
                appId: 'A5B7ED25-A6E7-46C3-990C-B7A0C1590B33',
                sendUserMessageEmail: false,
                lastUpdatedDateTime: '2022-09-04T06:34:26.096Z',
              },
              {
                userRoleId: 'CC633196-54CE-4509-B0F9-AEF43B8148C2',
                userId: '114E8485-D1D0-4E27-9FC6-7D2D233D529D',
                roleId: '66CCDE0B-4BA4-4056-967A-5662730F0407',
                tenantId: 'FF14E12C-5C9B-4F9E-8DEF-321D05DFBE08',
                appId: 'A5B7ED25-A6E7-46C3-990C-B7A0C1590B33',
                sendUserMessageEmail: false,
                lastUpdatedDateTime: '2022-10-15T16:47:09.813Z',
              },
              {
                userRoleId: 'D112D261-A6E1-4445-943E-B083D9858667',
                userId: '114E8485-D1D0-4E27-9FC6-7D2D233D529D',
                roleId: '6441B35A-8CEB-4AF3-9C8E-0638092C4D69',
                tenantId: 'FF14E12C-5C9B-4F9E-8DEF-321D05DFBE08',
                appId: 'A5B7ED25-A6E7-46C3-990C-B7A0C1590B33',
                sendUserMessageEmail: false,
                lastUpdatedDateTime: '2022-09-28T12:43:32.470Z',
              },
            ],
          },
          dataValues: {
            userSessionId: 'AD3DC810-D3EB-4AE4-8603-6860448011E0',
            tenantId: 'FF14E12C-5C9B-4F9E-8DEF-321D05DFBE08',
            appId: 'A5B7ED25-A6E7-46C3-990C-B7A0C1590B33',
            userId: '114E8485-D1D0-4E27-9FC6-7D2D233D529D',
            userSessionStartTime: '2022-11-11T07:08:54.267Z',
            userSessionEndTime: null,
            lastUpdatedDateTime: '2022-11-11T07:08:54.267Z',
          },
          _previousDataValues: {
            tenantId: 'FF14E12C-5C9B-4F9E-8DEF-321D05DFBE08',
            appId: 'A5B7ED25-A6E7-46C3-990C-B7A0C1590B33',
            userId: '114E8485-D1D0-4E27-9FC6-7D2D233D529D',
            userSessionId: 'AD3DC810-D3EB-4AE4-8603-6860448011E0',
            userSessionStartTime: '2022-11-11T07:08:54.267Z',
            userSessionEndTime: null,
            lastUpdatedDateTime: '2022-11-11T07:08:54.267Z',
          },
          uniqno: 1,
          _changed: {},
          _options: {
            isNewRecord: true,
            _schema: null,
            _schemaDelimiter: '',
          },
          isNewRecord: false,
          null: null,
        },
        role: 'AppAdmin',
        roleId: '6441B35A-8CEB-4AF3-9C8E-0638092C4D69',
      }}
      pageData={{
        imageBG: {
          imageBG:
            'https://thulisha-cdn.azureedge.net/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/img1.png',
        },
        formBG: {
          formBG:
            'https://thulisha-cdn.azureedge.net/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/img1.png',
        },
        addressHeader: {
          addressHeader: 'Bal Bhavan Child Care Inc',
        },
        address: {
          address: '9923 161ST AVE NE, Redmond, WA, United States, 98052',
        },
        phone: {
          phone: '+1 425-443-9415',
        },
        email: {
          email: 'info@bal-bhavan.com',
        },
      }}
    />,
    div,
  )
})

test('render Contact2 component without login', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Contact2
      authData={{
        isLoggedIn: true,
        authentication: {
          name: 'Kumar Manju M',
          email: 'kmannju@gmail.com',
          profileImg:
            'https://lh3.googleusercontent.com/a/ALm5wu2Yp9x_YUCje0pE66OzfsIEthJRRlPNd-Olt6XK=s96-c',
          tokenObject: {
            token_type: 'Bearer',
            login_hint:
              'AJDLj6JUa8yxXrhHdWRHIV0S13cA09OaQfpIjUCnKKAjJ7VSNuDKY0EKF4F4P2spd0qUGas-l7ttpgbRDTW6798_aW5BSI1gCg',
            expires_in: 3599,
            id_token:
              'eyJhbGciOiJSUzI1NiIsImtpZCI6IjcxM2ZkNjhjOTY2ZTI5MzgwOTgxZWRjMDE2NGEyZjZjMDZjNTcwMmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNDE4OTI1ODU2ODAtMXBrbmoxY2lkamtxb3JtbHM4ajRxYmE4aGRicm5vdjYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0MTg5MjU4NTY4MC0xcGtuajFjaWRqa3Fvcm1sczhqNHFiYThoZGJybm92Ni5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwMzY0NzY4OTA5ODExNTYxNjE2OCIsImVtYWlsIjoia21hbm5qdUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6Im5YdzFOUjhMTlY2cHpoT0t3YnZ5YXciLCJuYW1lIjoiS3VtYXIgTWFuanUgTSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BTG01d3UyWXA5eF9ZVUNqZTBwRTY2T3pmc0lFdGhKUlJsUE5kLU9sdDZYSz1zOTYtYyIsImdpdmVuX25hbWUiOiJLdW1hciBNYW5qdSIsImZhbWlseV9uYW1lIjoiTSIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjY4NjkyNTIzLCJleHAiOjE2Njg2OTYxMjMsImp0aSI6IjU0NmYxYTIwMzM3MDVlMTJkMjhhMzYwOGEyMTEyNjE3YjA2ZDI5ZDEifQ.RGIdoyhjHg3AHAjoGb9PLWctJnekICeRSy-tPp8A4lazetvTI0_59iD9dZF8rjEqEgrLZO7Ik-uh6idjYsJGZBRnVikGplnwMx2G6cibprJwDfI_koqZrdDArmaDVjL2G0LtC30VojGeaAp5QI4piozvFZOZYk_RP1c5H44hu8atN4OUi7vQt-0cbrvZSGhq0XqphoClp8CL1zjAKhIgWDTIh01XDAxvDBDsg0s1UPy2HTpxnauWT3fO4W5STNy_BWJgcp3dOLZ1jY93eSg6m3Klrelk7BuTdpZ2dMjm2JZsp2H6z8P_5VR5eGO8IWUpyn2VE8kDt9z5wldWFMBPsQ',
            session_state: {
              extraQueryParams: {
                authuser: '0',
              },
            },
            first_issued_at: 1668692523343,
            expires_at: 1668696122343,
            idpId: 'google',
          },
          profile: {
            NT: '103647689098115616168',
            Ad: 'Kumar Manju M',
            rV: 'Kumar Manju',
            uT: 'M',
            hK: 'https://lh3.googleusercontent.com/a/ALm5wu2Yp9x_YUCje0pE66OzfsIEthJRRlPNd-Olt6XK=s96-c',
            cu: 'kmannju@gmail.com',
          },
        },
        tokenSource: 'google',
        dependeciesFormAPIS: {},
        session: {
          user: {
            userId: '114E8485-D1D0-4E27-9FC6-7D2D233D529D',
            userName: 'kmannju@gmail.com',
            userType: null,
            userLastName: 'M',
            userFirstName: 'Kumar Manju',
            userFullName: 'Kumar Manju M',
            startDate: '2022-09-04T06:34:26.060Z',
            endDate: null,
            oAuth_iss: 'accounts.google.com',
            oAuth_sub: '103647689098115616168',
            email: 'kmannju@gmail.com',
            pictureURL: null,
            active: true,
            tenantId: 'FF14E12C-5C9B-4F9E-8DEF-321D05DFBE08',
            appId: 'A5B7ED25-A6E7-46C3-990C-B7A0C1590B33',
            lastUpdatedDateTime: '2022-09-04T06:34:26.060Z',
            userRoles: [
              {
                roleName: 'AppUser',
                roleId: 'AF31655A-065A-462C-84B7-3E166F41BAFE',
                UserRole: {
                  userRoleId: 'E50476C9-9498-448D-BDE5-2C4FFD6B32E1',
                  userId: '114E8485-D1D0-4E27-9FC6-7D2D233D529D',
                  roleId: 'AF31655A-065A-462C-84B7-3E166F41BAFE',
                  tenantId: 'FF14E12C-5C9B-4F9E-8DEF-321D05DFBE08',
                  appId: 'A5B7ED25-A6E7-46C3-990C-B7A0C1590B33',
                  sendUserMessageEmail: false,
                  lastUpdatedDateTime: '2022-09-04T06:34:26.096Z',
                },
              },
              {
                roleName: 'SysAdmin',
                roleId: '66CCDE0B-4BA4-4056-967A-5662730F0407',
                UserRole: {
                  userRoleId: 'CC633196-54CE-4509-B0F9-AEF43B8148C2',
                  userId: '114E8485-D1D0-4E27-9FC6-7D2D233D529D',
                  roleId: '66CCDE0B-4BA4-4056-967A-5662730F0407',
                  tenantId: 'FF14E12C-5C9B-4F9E-8DEF-321D05DFBE08',
                  appId: 'A5B7ED25-A6E7-46C3-990C-B7A0C1590B33',
                  sendUserMessageEmail: false,
                  lastUpdatedDateTime: '2022-10-15T16:47:09.813Z',
                },
              },
              {
                roleName: 'AppAdmin',
                roleId: '6441B35A-8CEB-4AF3-9C8E-0638092C4D69',
                UserRole: {
                  userRoleId: 'D112D261-A6E1-4445-943E-B083D9858667',
                  userId: '114E8485-D1D0-4E27-9FC6-7D2D233D529D',
                  roleId: '6441B35A-8CEB-4AF3-9C8E-0638092C4D69',
                  tenantId: 'FF14E12C-5C9B-4F9E-8DEF-321D05DFBE08',
                  appId: 'A5B7ED25-A6E7-46C3-990C-B7A0C1590B33',
                  sendUserMessageEmail: false,
                  lastUpdatedDateTime: '2022-09-28T12:43:32.470Z',
                },
              },
              {
                roleName: 'Terminal',
                roleId: 'F03992D5-A07B-4312-99EF-67A5F821393B',
                UserRole: {
                  userRoleId: '28659042-5C97-4EB0-AE7E-EEFAE7FF851C',
                  userId: '114E8485-D1D0-4E27-9FC6-7D2D233D529D',
                  roleId: 'F03992D5-A07B-4312-99EF-67A5F821393B',
                  tenantId: 'FF14E12C-5C9B-4F9E-8DEF-321D05DFBE08',
                  appId: 'A5B7ED25-A6E7-46C3-990C-B7A0C1590B33',
                  sendUserMessageEmail: false,
                  lastUpdatedDateTime: '2022-09-23T05:44:31.980Z',
                },
              },
            ],
            UserFamily: [
              {
                userFamilyId: 'A58A4297-E5FA-4645-B152-9502E99F0B06',
                userId: '114E8485-D1D0-4E27-9FC6-7D2D233D529D',
                userFamilyMemberName: 'Kumar Manju M',
                userFamilyMemberRelationship: 'SELF',
                userFamilyMemberEmail: 'kmannju@gmail.com',
                userFamilyMemberInviteStatus: null,
                userFamilyMemberCellphone: null,
                userFamilyMemberHomephone: null,
                userFamilyMemberAltPhone: null,
                userFamilyMemberIsFamily: true,
                userFamilyMemberIsEmContact: false,
                userFamilyMemberPickupPermissions: true,
                userFamilyMemberStreetAddress: null,
                userFamilyMemberCity: null,
                userFamilyMemberState: null,
                userFamilyMemberZipCode: null,
                lastUpdatedDateTime: '2022-09-04T06:34:26.130Z',
              },
            ],
            rowFormData: [
              {
                userRoleId: '28659042-5C97-4EB0-AE7E-EEFAE7FF851C',
                userId: '114E8485-D1D0-4E27-9FC6-7D2D233D529D',
                roleId: 'F03992D5-A07B-4312-99EF-67A5F821393B',
                tenantId: 'FF14E12C-5C9B-4F9E-8DEF-321D05DFBE08',
                appId: 'A5B7ED25-A6E7-46C3-990C-B7A0C1590B33',
                sendUserMessageEmail: false,
                lastUpdatedDateTime: '2022-09-23T05:44:31.980Z',
              },
              {
                userRoleId: 'E50476C9-9498-448D-BDE5-2C4FFD6B32E1',
                userId: '114E8485-D1D0-4E27-9FC6-7D2D233D529D',
                roleId: 'AF31655A-065A-462C-84B7-3E166F41BAFE',
                tenantId: 'FF14E12C-5C9B-4F9E-8DEF-321D05DFBE08',
                appId: 'A5B7ED25-A6E7-46C3-990C-B7A0C1590B33',
                sendUserMessageEmail: false,
                lastUpdatedDateTime: '2022-09-04T06:34:26.096Z',
              },
              {
                userRoleId: 'CC633196-54CE-4509-B0F9-AEF43B8148C2',
                userId: '114E8485-D1D0-4E27-9FC6-7D2D233D529D',
                roleId: '66CCDE0B-4BA4-4056-967A-5662730F0407',
                tenantId: 'FF14E12C-5C9B-4F9E-8DEF-321D05DFBE08',
                appId: 'A5B7ED25-A6E7-46C3-990C-B7A0C1590B33',
                sendUserMessageEmail: false,
                lastUpdatedDateTime: '2022-10-15T16:47:09.813Z',
              },
              {
                userRoleId: 'D112D261-A6E1-4445-943E-B083D9858667',
                userId: '114E8485-D1D0-4E27-9FC6-7D2D233D529D',
                roleId: '6441B35A-8CEB-4AF3-9C8E-0638092C4D69',
                tenantId: 'FF14E12C-5C9B-4F9E-8DEF-321D05DFBE08',
                appId: 'A5B7ED25-A6E7-46C3-990C-B7A0C1590B33',
                sendUserMessageEmail: false,
                lastUpdatedDateTime: '2022-09-28T12:43:32.470Z',
              },
            ],
          },
          dataValues: {
            userSessionId: 'AD3DC810-D3EB-4AE4-8603-6860448011E0',
            tenantId: 'FF14E12C-5C9B-4F9E-8DEF-321D05DFBE08',
            appId: 'A5B7ED25-A6E7-46C3-990C-B7A0C1590B33',
            userId: '114E8485-D1D0-4E27-9FC6-7D2D233D529D',
            userSessionStartTime: '2022-11-11T07:08:54.267Z',
            userSessionEndTime: null,
            lastUpdatedDateTime: '2022-11-11T07:08:54.267Z',
          },
          _previousDataValues: {
            tenantId: 'FF14E12C-5C9B-4F9E-8DEF-321D05DFBE08',
            appId: 'A5B7ED25-A6E7-46C3-990C-B7A0C1590B33',
            userId: '114E8485-D1D0-4E27-9FC6-7D2D233D529D',
            userSessionId: 'AD3DC810-D3EB-4AE4-8603-6860448011E0',
            userSessionStartTime: '2022-11-11T07:08:54.267Z',
            userSessionEndTime: null,
            lastUpdatedDateTime: '2022-11-11T07:08:54.267Z',
          },
          uniqno: 1,
          _changed: {},
          _options: {
            isNewRecord: true,
            _schema: null,
            _schemaDelimiter: '',
          },
          isNewRecord: false,
          null: null,
        },
        role: 'AppAdmin',
        roleId: '6441B35A-8CEB-4AF3-9C8E-0638092C4D69',
      }}
      pageData={{
        imageBG: {
          imageBG:
            'https://thulisha-cdn.azureedge.net/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/img1.png',
        },
        formBG: {
          formBG:
            'https://thulisha-cdn.azureedge.net/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/img1.png',
        },
        addressHeader: {
          addressHeader: 'Bal Bhavan Child Care Inc',
        },
        address: {
          address: '9923 161ST AVE NE, Redmond, WA, United States, 98052',
        },
        phone: {
          phone: '+1 425-443-9415',
        },
        email: {
          email: 'info@bal-bhavan.com',
        },
      }}
    />,
    div,
  )
})
