import './devPage.css'
import Image from 'next/image'
import { Box, Divider } from '@mui/material'

export default function DevPage() {
    return (
        <section className="main-dev-con">
            {/*<b className="dev-title">Developer</b>*/}
            <ul className="content-dev-con">
                <ul className="dev-box-con">
                    <div className="dev-top-profile-con">
                        <Image
                            className="tra-img"
                            src="/profile/Tra.png"
                            alt="Tra img"
                            width={80}
                            height={120}
                        />
                        <div className="dev-text-profile-tra-con">
                            <b>Ly Sochetra</b>
                            <p>Developer</p>
                        </div>
                        <div className="divider-con">
                            <Divider
                                orientation="vertical"
                                sx={{
                                    backgroundColor: 'white',
                                    height: '70px !important',
                                    marginTop: '15px',
                                }}
                            />
                        </div>
                        <ul className="lang-logo-con">
                            <li>
                                <Image
                                    className="lang-logo"
                                    width={50}
                                    height={40}
                                    src="/image/logo/html.png"
                                    alt="html-img"
                                />
                            </li>
                            <li>
                                <Image
                                    className="lang-logo"
                                    width={55}
                                    height={40}
                                    src="/image/logo/css.png"
                                    alt="html-img"
                                />
                            </li>
                            <li>
                                <Image
                                    className="lang-logo"
                                    width={50}
                                    height={40}
                                    src="/image/logo/js.jpg"
                                    alt="html-img"
                                />
                            </li>
                            <li>
                                <Image
                                    className="lang-logo"
                                    width={55}
                                    height={40}
                                    src="/image/logo/nextJs.png"
                                    alt="html-img"
                                />
                            </li>
                            <li>
                                <Image
                                    className="lang-logo"
                                    width={50}
                                    height={40}
                                    src="/image/logo/Ts.jpg"
                                    alt="html-img"
                                />
                            </li>
                            <li>
                                <Image
                                    className="lang-logo"
                                    width={50}
                                    height={45}
                                    src="/image/logo/mui.png"
                                    alt="html-img"
                                />
                            </li>
                        </ul>
                    </div>
                </ul>

                <ul className="dev-box-con">
                    <div className="dev-top-profile-con">
                        <Image
                            className="theavin-img"
                            src="/profile/Theavin.png"
                            alt="Theavin img"
                            width={50}
                            height={120}
                        />
                        <div className="dev-text-profile-con">
                            <b>Hem Theavin</b>
                            <p>Developer</p>
                        </div>
                        <div className="divider-con">
                            <Divider
                                orientation="vertical"
                                sx={{
                                    backgroundColor: 'white',
                                    height: '70px !important',
                                    marginTop: '15px',
                                }}
                            />
                        </div>
                        <ul className="lang-logo-con">
                            <li>
                                <Image
                                    className="lang-logo"
                                    width={50}
                                    height={40}
                                    src="/image/logo/html.png"
                                    alt="html-img"
                                />
                            </li>
                            <li>
                                <Image
                                    className="lang-logo"
                                    width={55}
                                    height={40}
                                    src="/image/logo/css.png"
                                    alt="html-img"
                                />
                            </li>
                            <li>
                                <Image
                                    className="lang-logo"
                                    width={50}
                                    height={40}
                                    src="/image/logo/js.jpg"
                                    alt="html-img"
                                />
                            </li>
                            <li>
                                <Image
                                    className="lang-logo"
                                    width={55}
                                    height={40}
                                    src="/image/logo/nextJs.png"
                                    alt="html-img"
                                />
                            </li>
                            <li>
                                <Image
                                    className="lang-logo"
                                    width={50}
                                    height={40}
                                    src="/image/logo/tailwind.png"
                                    alt="html-img"
                                />
                            </li>
                        </ul>
                    </div>
                </ul>

                <ul className="dev-box-con">
                    <div className="dev-top-profile-con">
                        <Image
                            className="kimly-img"
                            src="/profile/kimly.png"
                            alt="Kimly img"
                            width={50}
                            height={120}
                        />
                        <div className="dev-text-profile-kimly-con">
                            <b>Ra Kimly</b>
                            <p>Developer</p>
                        </div>
                        <div className="divider-con">
                            <Divider
                                orientation="vertical"
                                sx={{
                                    backgroundColor: 'white',
                                    height: '70px !important',
                                    marginTop: '15px',
                                }}
                            />
                        </div>
                        <ul className="lang-logo-con">
                            <li>
                                <Image
                                    className="lang-logo"
                                    width={50}
                                    height={40}
                                    src="/image/logo/html.png"
                                    alt="html-img"
                                />
                            </li>
                            <li>
                                <Image
                                    className="lang-logo"
                                    width={55}
                                    height={40}
                                    src="/image/logo/css.png"
                                    alt="html-img"
                                />
                            </li>
                            <li>
                                <Image
                                    className="lang-logo"
                                    width={50}
                                    height={40}
                                    src="/image/logo/js.jpg"
                                    alt="html-img"
                                />
                            </li>
                        </ul>
                    </div>
                </ul>
            </ul>
        </section>
    )
}
