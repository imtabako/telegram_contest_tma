import { useState } from 'react'

function PhotoUpload() {
  const [photo, setPhoto] = useState()

  function handlePhoto(e) {
    setPhoto(e.target.files[0])
    console.log(e.target.files[0])
  }

  function handleUpload() {
    const formData = new FormData()
    formData.append('photo', photo)
    fetch(
      'url',
      {
        method: "POST",
        body: formData
      }
    )
      .then((response) => response.json())
      .then(
        (result) => {
          console.log('success: ', result)
        }
      )
      .catch(error => {
        console.error('error: ', error)
      })
  }

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" name="photo" onChange={handlePhoto}/>
      </form>
    </div>
  )
}

export default PhotoUpload
