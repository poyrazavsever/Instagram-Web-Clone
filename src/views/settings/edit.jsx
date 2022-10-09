import {Helmet} from "react-helmet"

function Edit() {

  return (
    <div>

      <Helmet>
        <title>Profili düzenle . Instagram</title>
      </Helmet>
      <div>

        <img src="Images/ProfilePhotos/noavatar.jpg" alt="editPhoto" />
        <p className="text-xl"></p>
        <small>Profil fotoğrafını değiştir.</small>

      </div>
    </div>
  )
}

export default Edit