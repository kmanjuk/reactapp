import ReactDOM from 'react-dom'
import { Footer1 } from './Footer1'

test('render Footer1 component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Footer1 />, div)
})

test('render Footer1 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Footer1
      pageData={{
        pageElementId: 'A5522108-321B-47D9-916D-C5FEA04DFE0F',
        id: {
          pageElementPropertyId: '967220CE-053D-4439-A921-1CE87FF9FCD8',
          elementTypePropertyId: 'B533D36C-F683-4544-8D03-0DDC7AE74439',
          id: '23056849',
        },
        className: {
          pageElementPropertyId: 'D256238E-C2FD-4B9E-B6E3-5121046C3B9D',
          elementTypePropertyId: 'F97126BE-481A-4FA0-854F-CB1CBC7A2DE6',
          className: 'Footer1',
        },
        footerLogo: {
          pageElementPropertyId: '62098D97-6717-401D-8F94-9369D2B8B6BD',
          elementTypePropertyId: '8D21EE4D-CAE4-4E27-8541-3608B2E5A11D',
          footerLogo:
            'https://thulishacdnstorage.blob.core.windows.net/resources/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/logo.png',
        },
        address: {
          pageElementPropertyId: '6626EE06-4926-41CB-803E-1D5481423CDC',
          elementTypePropertyId: '6E3279E8-D005-44DC-A961-A1A69705D5A8',
          address: 'Redmond, WA',
        },
        phone: {
          pageElementPropertyId: 'E9604755-0404-4B9E-A491-8305F7F91FC8',
          elementTypePropertyId: 'D6FF5067-0D26-40A4-8CB0-93EFB1669427',
          phone: '+1 234-567-8901',
        },
        email: {
          pageElementPropertyId: 'AB7CEE5F-FC9A-407B-BB49-DEF942B140DA',
          elementTypePropertyId: 'B4671F13-FDB1-4E70-A5EB-8FC840598966',
          email: 'info@bal-bhavan.com',
        },
        footerText: {
          pageElementPropertyId: 'DDB52CA6-FF3B-4A68-BAE0-29BE74C57EB0',
          elementTypePropertyId: '7CAB88C4-7D93-414B-81EE-A97E7E6B9A2E',
          footerText:
            'Bal Bhavan mission is to provide affordable, high-quality early education and childcare services for working families to ensure every child',
        },
        copyright: {
          pageElementPropertyId: 'AC8C2074-EDBB-4294-AE3F-E2D6F9706150',
          elementTypePropertyId: 'EF999345-F857-4612-94D7-6E49582D8014',
          copyright: '© All Rights Reserved by Bal Bhavan Child Care.',
        },
        addressHeader: {
          pageElementPropertyId: '9C2BDA1A-CD03-4EBC-B400-19107D99DD45',
          elementTypePropertyId: '24276BB0-B9E1-4C87-96D0-777465E12CCE',
          addressHeader: 'Bal Bhavan Location',
        },
        linkHeader: {
          pageElementPropertyId: 'B77091B4-D039-408C-BB3D-0B5D98526889',
          elementTypePropertyId: '4E74B947-32C1-4BD4-8F4C-007FBC7561C1',
          linkHeader: 'Resources',
        },
        spacer: {
          pageElementPropertyId: '5078D648-BA04-4C83-99D7-4DEE1D607502',
          elementTypePropertyId: '50649DF9-2E51-4984-B66C-EC97B3DDAD9D',
          spacer: '1',
        },
        childItems: [
          {
            pageElementId: '7D43F1AD-A774-4818-9B45-76AA64699C83',
            className: {
              pageElementPropertyId: 'C98AC906-5ED7-4D3E-B3E9-50B561B8201D',
              elementTypePropertyId: 'F698AE1C-AE5B-420B-8477-F6F2532285CB',
              className: 'Footer1SocialLinks',
            },
            icon: {
              pageElementPropertyId: 'CD04839C-DEA7-40B9-8944-8014BDB9ED14',
              elementTypePropertyId: '3A2D6B6D-3595-4951-9391-E2416DB2815D',
              icon: 'facebook',
            },
            link: {
              pageElementPropertyId: 'B8497549-625B-4F9D-846B-282579B09E61',
              elementTypePropertyId: '615A2511-E1D7-4D22-977C-91CFA9223472',
              link: 'https://www.facebook.com/BalBhavan.Redmond',
            },
            childItems: [],
          },
          {
            pageElementId: '33121371-595E-4E83-B67C-CDA8E205504F',
            className: {
              pageElementPropertyId: 'D51EF3B4-C438-4CE5-B704-BFFE068BE4F7',
              elementTypePropertyId: 'BFF4FDA8-0117-41FF-8F4F-15FAD45862CF',
              className: 'Footer1LinkItem',
            },
            linkName: {
              pageElementPropertyId: '04591200-0431-4D6E-8CE9-0F36BB8E1CE3',
              elementTypePropertyId: '6FBB73FF-B562-45B1-838F-F6CCB644E00E',
              linkName: 'Privacy Policy',
            },
            link: {
              pageElementPropertyId: '2CA3D5C1-8FAD-4C83-8357-568ED2ABF9EB',
              elementTypePropertyId: '7B675E1F-0BA9-4F33-82E5-2B14262C8C09',
              link: '/policies/privacy-policy',
            },
            childItems: [],
          },
          {
            pageElementId: 'D1008D42-34AC-4C76-ADE6-01FFBC288DE5',
            className: {
              pageElementPropertyId: '3DD94488-F977-4465-9CF4-028BBC2BE733',
              elementTypePropertyId: 'F698AE1C-AE5B-420B-8477-F6F2532285CB',
              className: 'Footer1SocialLinks',
            },
            icon: {
              pageElementPropertyId: 'A275D6C0-41F0-4830-8F21-71B57B95D76B',
              elementTypePropertyId: '3A2D6B6D-3595-4951-9391-E2416DB2815D',
              icon: 'twitter',
            },
            link: {
              pageElementPropertyId: '83934B5E-D2D9-4683-8583-076C4EA76A8A',
              elementTypePropertyId: '615A2511-E1D7-4D22-977C-91CFA9223472',
              link: 'https://twitter.com',
            },
            childItems: [],
          },
          {
            pageElementId: '617227B3-8AFE-4151-9320-09653C49BC0E',
            className: {
              pageElementPropertyId: '48CF6496-7B40-4DD4-BA6F-79FBF14A44BB',
              elementTypePropertyId: 'BFF4FDA8-0117-41FF-8F4F-15FAD45862CF',
              className: 'Footer1LinkItem',
            },
            linkName: {
              pageElementPropertyId: 'F43483F7-F819-41D9-90D0-CB3D0B081E6C',
              elementTypePropertyId: '6FBB73FF-B562-45B1-838F-F6CCB644E00E',
              linkName: 'Home',
            },
            link: {
              pageElementPropertyId: 'F356410B-DB74-4739-AA45-7DB5307319C5',
              elementTypePropertyId: '7B675E1F-0BA9-4F33-82E5-2B14262C8C09',
              link: '/',
            },
            childItems: [],
          },
          {
            pageElementId: 'BFDB28E7-2894-486C-B64E-6D19458F2AD8',
            className: {
              pageElementPropertyId: 'A9B4A659-55B8-4D46-971E-0639B772BC7F',
              elementTypePropertyId: 'BFF4FDA8-0117-41FF-8F4F-15FAD45862CF',
              className: 'Footer1LinkItem',
            },
            linkName: {
              pageElementPropertyId: '8AC01C30-F848-4209-B6FA-2BA2C8AEBE0A',
              elementTypePropertyId: '6FBB73FF-B562-45B1-838F-F6CCB644E00E',
              linkName: 'About',
            },
            link: {
              pageElementPropertyId: '2A69B8A5-0289-4496-AC77-A165F27F7E43',
              elementTypePropertyId: '7B675E1F-0BA9-4F33-82E5-2B14262C8C09',
              link: '/about',
            },
            childItems: [],
          },
          {
            pageElementId: 'CF284766-B00B-4103-A4FE-FC3F59252811',
            className: {
              pageElementPropertyId: '24081946-5BDA-42D7-88F9-EFD69651D52B',
              elementTypePropertyId: 'BFF4FDA8-0117-41FF-8F4F-15FAD45862CF',
              className: 'Footer1LinkItem',
            },
            linkName: {
              pageElementPropertyId: '8312D7D2-80CC-47EF-B7C7-2532431F2780',
              elementTypePropertyId: '6FBB73FF-B562-45B1-838F-F6CCB644E00E',
              linkName: 'Contact',
            },
            link: {
              pageElementPropertyId: '05D6AB2C-30A6-4D8B-8967-D60B4E68A1F9',
              elementTypePropertyId: '7B675E1F-0BA9-4F33-82E5-2B14262C8C09',
              link: '/contact',
            },
            childItems: [],
          },
        ],
      }}
    />,
    div,
  )
})
