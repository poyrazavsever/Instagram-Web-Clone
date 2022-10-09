import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { MetaIcon } from "../../icons"
import classNames from "classnames"

function SettingsLayout() {
    return (
        <div className='bg-white border rounded mt-8 flex gap-x-12'>

            <div className='w-72 border-r rounded'>

                <nav className='flex flex-col items-start w-full'>
                    <NavLink to="edit" className={({ isActive }) => classNames({
                        "py-3 pl-5": true,
                        "border-l-2 border-black -mt-px": isActive
                    })}>Profili Düzenle</NavLink>

                    <NavLink to="password_change" className={({ isActive }) => classNames({
                        "py-3 pl-5": true,
                        "border-l-2 border-black -mt-px": isActive
                    })}>Şifreyi Değiştir</NavLink>

                    <NavLink to="manage_accsess" className={({ isActive }) => classNames({
                        "py-3 pl-5": true,
                        "border-l-2 border-black -mt-px": isActive
                    })}>Uygulamalar ve internet siteleri</NavLink>

                    <NavLink to="email_notification" className={({ isActive }) => classNames({
                        "py-3 pl-5": true,
                        "border-l-2 border-black -mt-px": isActive
                    })}>E-posta bildirimleri</NavLink>

                    <NavLink to="push_notification" className={({ isActive }) => classNames({
                        "py-3 pl-5": true,
                        "border-l-2 border-black -mt-px": isActive
                    })}>Anında ilet bildirimleri</NavLink>

                    <NavLink to="push_notification" className={({ isActive }) => classNames({
                        "py-3 pl-5": true,
                        "border-l-2 border-black -mt-px": isActive
                    })}>Kişileri Yönet</NavLink>

                    <NavLink to="push_notification" className={({ isActive }) => classNames({
                        "py-3 pl-5": true,
                        "border-l-2 border-black -mt-px": isActive
                    })}>Gizlilik ve güvenlik</NavLink>

                    <NavLink to="push_notification" className={({ isActive }) => classNames({
                        "py-3 pl-5": true,
                        "border-l-2 border-black -mt-px": isActive
                    })}>Gözetim</NavLink>

                    <NavLink to="push_notification" className={({ isActive }) => classNames({
                        "py-3 pl-5": true,
                        "border-l-2 border-black -mt-px": isActive
                    })}>Giriş Hareketleri</NavLink>

                    <NavLink to="push_notification" className={({ isActive }) => classNames({
                        "py-3 pl-5": true,
                        "border-l-2 border-black -mt-px": isActive
                    })}>Instagram'dan E-postalar</NavLink>

                    <NavLink to="push_notification" className={({ isActive }) => classNames({
                        "py-3 pl-5": true,
                        "border-l-2 border-black -mt-px": isActive
                    })}>Yardım</NavLink>
                </nav>

                <div className='w-full flex justify-center items- my-6'>
                    <Link to="/" className='text text-btn text-xs font-semibold pt-5 w-full flex justify-center items-center'>Profesyonel Hesaba Geçiş Yap</Link>
                </div>

                <div className='border-t pl-6 py-5 flex flex-col justify-start'>
                    <MetaIcon />
                    <h6 className='text-btn font-semibold pt-3'>Hesaplar Merkezi</h6>
                    <p className='text-xs text-zinc-500 pt-3'>Hikaye ve gönderi paylaşımı ve giriş yapma dahil Instagram, Facebook uygulaması ve Messenger arasındaki bağlantılı deneyimler için ayarları kontrol et.</p>
                </div>
            </div>

            <div className='mt-10 w-full flex justify-center'>
                <Outlet />
            </div>
        </div>

    )
}

export default SettingsLayout