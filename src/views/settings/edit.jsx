import { useEffect, useState } from "react";
import { getUserInfo } from "../../firebase";
import { Helmet } from "react-helmet"
import SettingsInput from "./components/settingsInput";

function Edit() {

  const username = localStorage.getItem("username")
  const [user, setUser] = useState(null)

  useEffect(() => {
    getUserInfo(username)
      .then(user => {
        setUser(user)
      })
      .catch(err => {
        setUser(false)
      })
  }, [])

  return user && (

    <div>

      <Helmet>
        <title>Profili düzenle . Instagram</title>
      </Helmet>


      <div className="flex flex-col items-start justify-center gap-y-4">

        <div className="flex items-start justify-around gap-x-8">

          <img src="Images/ProfilePhotos/images2.jpg" alt="asdasd"
            className="W-[38px] h-[38px] rounded-full" />

          <div className="flex flex-col items-start justify-center">
            <p className="text-[20px] font-normal">{user.username}</p>
            <small className="text-btn text-sm font-semibold cursor-pointer">Profil fotoğrafını değiştir.</small>
          </div>

        </div>

        <form>

          <SettingsInput id="user" label="Adın"
            warning="Adın ve soyadın, takma adın veya işletmenin adı gibi tanındığın bir adı kullanarak insanların hesabını keşfetmesine yardımcı ol." warningBottom="Adını 14 gün içinde sadece iki kez değiştirebilirsin." />

          <SettingsInput id="username" label="Kullanıcı Adın"
            warning={`Çoğu durumda, kullanıcı adını 14 gün içinde yeniden değiştirip ${user.username} yapabileceksin.`}/>

          <SettingsInput id="website" label="İnternet sitesi"
            warning="Bağlantılarını sadece mobil cihazlarda düzenleyebilirsin. Biyografindeki internet sitelerini değiştirmek için Instagram uygulamasını ziyaret et ve profilini düzenle."/>

          <SettingsInput id="bio" label="Biyografi"/>

          <div>
            <SettingsInput id="user" label="Adın"
              warning="Adın ve soyadın, takma adın veya işletmenin adı gibi tanındığın bir adı kullanarak insanların hesabını keşfetmesine yardımcı ol." warningBottom="Adını 14 gün içinde sadece iki kez değiştirebilirsin." />

            <SettingsInput id="user" label="Adın"
              warning="Adın ve soyadın, takma adın veya işletmenin adı gibi tanındığın bir adı kullanarak insanların hesabını keşfetmesine yardımcı ol." warningBottom="Adını 14 gün içinde sadece iki kez değiştirebilirsin." />

            <SettingsInput id="user" label="Adın"
              warning="Adın ve soyadın, takma adın veya işletmenin adı gibi tanındığın bir adı kullanarak insanların hesabını keşfetmesine yardımcı ol." warningBottom="Adını 14 gün içinde sadece iki kez değiştirebilirsin." />
          </div>


        </form>

      </div>



    </div>

  )
}

export default Edit