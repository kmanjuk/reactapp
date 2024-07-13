import { convCol } from './css-filter'
import { queryClient } from './reactQueryClient'

export const mainUILoad = (primary, secondary, favicon) => {
  const favLink = document.getElementById('faviconLink') || ''
  favLink.setAttribute('href', favicon)
  document.body.classList.add('vertical-layout')
  const col1 = convCol(secondary)
  const col2 = convCol(primary)

  document.documentElement.style.setProperty('--mainPrimaryCol', primary)
  document.documentElement.style.setProperty('--mainPrimaryColHover', primary)

  document.documentElement.style.setProperty('--primaryCol', col1)
  document.documentElement.style.setProperty('--primaryCol-hover', col2)
}
export const setSideMenu = (bool) => {
  if (bool === 'open') {
    document.body.classList.add('toggle-menu')
    document.getElementById('leftBar').classList.add('sideMenu')
    document.getElementById('mhcollapseLB').style.display = 'none'
    document.getElementById('mhcloseLB').style.display = 'inline'
  } else {
    document.body.classList.remove('toggle-menu')
    document.getElementById('leftBar').classList.remove('sideMenu')
    document.getElementById('mhcollapseLB').style.display = 'inline'
    document.getElementById('mhcloseLB').style.display = 'none'
  }
}

export const setTopBarMenu = (bool) => {
  if (bool === 'open') {
    document.body.classList.add('topbar-toggle-menu')
    document.getElementById('tbMenuOpen').style.display = 'none'
    document.getElementById('tbMenuClose').style.display = 'inline'
  } else {
    document.body.classList.remove('topbar-toggle-menu')
    document.getElementById('tbMenuOpen').style.display = 'inline'
    document.getElementById('tbMenuClose').style.display = 'none'
  }
}

export const setSideMenuMobile = (bool) => {
  if (bool === 'open') {
    document.body.classList.add('toggle-menu')
    document.getElementById('leftBar').classList.add('sideMenu')
    document.getElementById('mhcollapseLBMobile').style.display = 'none'
    document.getElementById('mhcloseLBMobile').style.display = 'inline'
  } else {
    document.body.classList.remove('toggle-menu')
    document.getElementById('leftBar').classList.remove('sideMenu')
    document.getElementById('mhcollapseLBMobile').style.display = 'block'
    document.getElementById('mhcloseLBMobile').style.display = 'none'
  }
}

export const openModal = (setLoginModal) => {
  document.body.classList.add('modal-open')
  setLoginModal(true)
}

export const closeModal = (setLoginModal) => {
  setLoginModal(false)
  document.body.classList.remove('modal-open')
}

export const addMainCrud = (setMainCrudAdd) => {
  setMainCrudAdd(true)
}

export const closeAddMainCrud = (setMainCrudAdd) => {
  setMainCrudAdd(false)
}

export const handleSearch = (e, setAllData, schema, allData, filter, filterObject) => {
  localStorage.setItem('filterVal', e.target.value)
  const initialData = queryClient.getQueryData(schema.api)
  let filtered

  if (filter) {
    setAllData(initialData)
    filtered = initialData.formData.filter((f) => f[filterObject] === filter)
    // filtered = initialData.formData.filter((entry) =>
    // 	Object.values(entry).some(
    // 		(val) =>
    // 			typeof val === "string" &&
    // 			val.toLowerCase().includes(e.target.value.toLowerCase())
    // 	)
    // );
  } else {
    if (allData === null) {
      setAllData(initialData)
      // filtered = initialData.formData.filter((f) =>
      // 	f[schema.searchObject].toLowerCase().includes(e.target.value)
      // );
      filtered = initialData.formData.filter((entry) =>
        Object.values(entry).some(
          (val) =>
            typeof val === 'string' && val.toLowerCase().includes(e.target.value.toLowerCase()),
        ),
      )
    } else {
      // filtered = allData.formData.filter((f) =>
      // 	f[schema.searchObject].toLowerCase().includes(e.target.value)
      // );
      filtered = allData.formData.filter((entry) =>
        Object.values(entry).some(
          (val) =>
            typeof val === 'string' && val.toLowerCase().includes(e.target.value.toLowerCase()),
        ),
      )
    }
  }
  queryClient.setQueryData(schema.api, { formData: filtered })
}
