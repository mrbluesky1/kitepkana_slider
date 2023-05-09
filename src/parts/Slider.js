import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {useRef} from "react";

export const SliderComponent = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        swipe: false,
        centerPadding: 0
    }
    const sliderRef = useRef(null);

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div>
            <Slider className="test" ref={sliderRef} {...settings}>
                <div className="first_slider">
                        <div className="slide">

                            <div className="slider_item">
                                <div className="item_inner">
                                    <div className="slider_left"></div>
                                    <div className="slider_right">
                                        <h2 className="title">Плаха</h2>
                                        <p className="author">Чингиз Айтматов</p>
                                        <p className="description">«Плаха» - это роман советского писателя Чингиза
                                            Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман рассказывает
                                            о судьбах двух людей — Авдия Каллистратова и Бостона Бейшеналиева, которые
                                            встречаются на берегу Иссык-Куля и отправляются вместе на поиски своих
                                            корней</p>
                                        <button className="item_button">Читать дальше</button>
                                    </div>
                                </div>
                            </div>

                            <div className="slider_item">
                                <div className="item_inner">
                                    <div className="slider_left"></div>
                                    <div className="slider_right">
                                        <h2 className="title">Плаха</h2>
                                        <p className="author">Чингиз Айтматов</p>
                                        <p className="description">«Плаха» - это роман советского писателя Чингиза
                                            Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман рассказывает
                                            о судьбах двух людей — Авдия Каллистратова и Бостона Бейшеналиева, которые
                                            встречаются на берегу Иссык-Куля и отправляются вместе на поиски своих
                                            корней</p>
                                        <button className="item_button">Читать дальше</button>
                                    </div>
                                </div>
                            </div>

                            <div className="slide" style={{display: "none"}}>

                                <div className="slider_item">
                                    <div className="item_inner">
                                        <div className="slider_left"></div>
                                        <div className="slider_right">
                                            <h2 className="title">Плаха</h2>
                                            <p className="author">Чингиз Айтматов</p>
                                            <p className="description">«Плаха» - это роман советского писателя Чингиза
                                                Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман
                                                рассказывает о судьбах двух людей — Авдия Каллистратова и Бостона
                                                Бейшеналиева, которые встречаются на берегу Иссык-Куля и отправляются вместе
                                                на поиски своих корней</p>
                                            <button className="item_button">Читать дальше</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="slider_item">
                                    <div className="item_inner">
                                        <div className="slider_left"></div>
                                        <div className="slider_right">
                                            <h2 className="title">Плаха</h2>
                                            <p className="author">Чингиз Айтматов</p>
                                            <p className="description">«Плаха» - это роман советского писателя Чингиза
                                                Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман
                                                рассказывает о судьбах двух людей — Авдия Каллистратова и Бостона
                                                Бейшеналиева, которые встречаются на берегу Иссык-Куля и отправляются вместе
                                                на поиски своих корней</p>
                                            <button className="item_button">Читать дальше</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        </div>
                <div className="first_slider">
                        <div className="slide">

                            <div className="slider_item">
                                <div className="item_inner">
                                    <div className="slider_left"></div>
                                    <div className="slider_right">
                                        <h2 className="title">Плаха</h2>
                                        <p className="author">Чингиз Айтматов</p>
                                        <p className="description">«Плаха» - это роман советского писателя Чингиза
                                            Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман рассказывает
                                            о судьбах двух людей — Авдия Каллистратова и Бостона Бейшеналиева, которые
                                            встречаются на берегу Иссык-Куля и отправляются вместе на поиски своих
                                            корней</p>
                                        <button className="item_button">Читать дальше</button>
                                    </div>
                                </div>
                            </div>

                            <div className="slider_item">
                                <div className="item_inner">
                                    <div className="slider_left"></div>
                                    <div className="slider_right">
                                        <h2 className="title">Плаха</h2>
                                        <p className="author">Чингиз Айтматов</p>
                                        <p className="description">«Плаха» - это роман советского писателя Чингиза
                                            Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман рассказывает
                                            о судьбах двух людей — Авдия Каллистратова и Бостона Бейшеналиева, которые
                                            встречаются на берегу Иссык-Куля и отправляются вместе на поиски своих
                                            корней</p>
                                        <button className="item_button">Читать дальше</button>
                                    </div>
                                </div>
                            </div>

                            <div className="slide" style={{display: "none"}}>

                                <div className="slider_item">
                                    <div className="item_inner">
                                        <div className="slider_left"></div>
                                        <div className="slider_right">
                                            <h2 className="title">Плаха</h2>
                                            <p className="author">Чингиз Айтматов</p>
                                            <p className="description">«Плаха» - это роман советского писателя Чингиза
                                                Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман
                                                рассказывает о судьбах двух людей — Авдия Каллистратова и Бостона
                                                Бейшеналиева, которые встречаются на берегу Иссык-Куля и отправляются вместе
                                                на поиски своих корней</p>
                                            <button className="item_button">Читать дальше</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="slider_item">
                                    <div className="item_inner">
                                        <div className="slider_left"></div>
                                        <div className="slider_right">
                                            <h2 className="title">Плаха</h2>
                                            <p className="author">Чингиз Айтматов</p>
                                            <p className="description">«Плаха» - это роман советского писателя Чингиза
                                                Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман
                                                рассказывает о судьбах двух людей — Авдия Каллистратова и Бостона
                                                Бейшеналиева, которые встречаются на берегу Иссык-Куля и отправляются вместе
                                                на поиски своих корней</p>
                                            <button className="item_button">Читать дальше</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        </div>
                <div className="first_slider">
                    <div className="slide">

                        <div className="slider_item">
                            <div className="item_inner">
                                <div className="slider_left"></div>
                                <div className="slider_right">
                                    <h2 className="title">Плаха</h2>
                                    <p className="author">Чингиз Айтматов</p>
                                    <p className="description">«Плаха» - это роман советского писателя Чингиза
                                        Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман рассказывает
                                        о судьбах двух людей — Авдия Каллистратова и Бостона Бейшеналиева, которые
                                        встречаются на берегу Иссык-Куля и отправляются вместе на поиски своих
                                        корней</p>
                                    <button className="item_button">Читать дальше</button>
                                </div>
                            </div>
                        </div>

                        <div className="slider_item">
                            <div className="item_inner">
                                <div className="slider_left"></div>
                                <div className="slider_right">
                                    <h2 className="title">Плаха</h2>
                                    <p className="author">Чингиз Айтматов</p>
                                    <p className="description">«Плаха» - это роман советского писателя Чингиза
                                        Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман рассказывает
                                        о судьбах двух людей — Авдия Каллистратова и Бостона Бейшеналиева, которые
                                        встречаются на берегу Иссык-Куля и отправляются вместе на поиски своих
                                        корней</p>
                                    <button className="item_button">Читать дальше</button>
                                </div>
                            </div>
                        </div>

                        <div className="slide" style={{display: "none"}}>

                            <div className="slider_item">
                                <div className="item_inner">
                                    <div className="slider_left"></div>
                                    <div className="slider_right">
                                        <h2 className="title">Плаха</h2>
                                        <p className="author">Чингиз Айтматов</p>
                                        <p className="description">«Плаха» - это роман советского писателя Чингиза
                                            Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман
                                            рассказывает о судьбах двух людей — Авдия Каллистратова и Бостона
                                            Бейшеналиева, которые встречаются на берегу Иссык-Куля и отправляются вместе
                                            на поиски своих корней</p>
                                        <button className="item_button">Читать дальше</button>
                                    </div>
                                </div>
                            </div>

                            <div className="slider_item">
                                <div className="item_inner">
                                    <div className="slider_left"></div>
                                    <div className="slider_right">
                                        <h2 className="title">Плаха</h2>
                                        <p className="author">Чингиз Айтматов</p>
                                        <p className="description">«Плаха» - это роман советского писателя Чингиза
                                            Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман
                                            рассказывает о судьбах двух людей — Авдия Каллистратова и Бостона
                                            Бейшеналиева, которые встречаются на берегу Иссык-Куля и отправляются вместе
                                            на поиски своих корней</p>
                                        <button className="item_button">Читать дальше</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    </div>
                <div className="first_slider">
                    <div className="slide">

                        <div className="slider_item">
                            <div className="item_inner">
                                <div className="slider_left"></div>
                                <div className="slider_right">
                                    <h2 className="title">Плаха</h2>
                                    <p className="author">Чингиз Айтматов</p>
                                    <p className="description">«Плаха» - это роман советского писателя Чингиза
                                        Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман рассказывает
                                        о судьбах двух людей — Авдия Каллистратова и Бостона Бейшеналиева, которые
                                        встречаются на берегу Иссык-Куля и отправляются вместе на поиски своих
                                        корней</p>
                                    <button className="item_button">Читать дальше</button>
                                </div>
                            </div>
                        </div>

                        <div className="slider_item">
                            <div className="item_inner">
                                <div className="slider_left"></div>
                                <div className="slider_right">
                                    <h2 className="title">Плаха</h2>
                                    <p className="author">Чингиз Айтматов</p>
                                    <p className="description">«Плаха» - это роман советского писателя Чингиза
                                        Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман рассказывает
                                        о судьбах двух людей — Авдия Каллистратова и Бостона Бейшеналиева, которые
                                        встречаются на берегу Иссык-Куля и отправляются вместе на поиски своих
                                        корней</p>
                                    <button className="item_button">Читать дальше</button>
                                </div>
                            </div>
                        </div>

                        <div className="slide" style={{display: "none"}}>

                            <div className="slider_item">
                                <div className="item_inner">
                                    <div className="slider_left"></div>
                                    <div className="slider_right">
                                        <h2 className="title">Плаха</h2>
                                        <p className="author">Чингиз Айтматов</p>
                                        <p className="description">«Плаха» - это роман советского писателя Чингиза
                                            Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман
                                            рассказывает о судьбах двух людей — Авдия Каллистратова и Бостона
                                            Бейшеналиева, которые встречаются на берегу Иссык-Куля и отправляются вместе
                                            на поиски своих корней</p>
                                        <button className="item_button">Читать дальше</button>
                                    </div>
                                </div>
                            </div>

                            <div className="slider_item">
                                <div className="item_inner">
                                    <div className="slider_left"></div>
                                    <div className="slider_right">
                                        <h2 className="title">Плаха</h2>
                                        <p className="author">Чингиз Айтматов</p>
                                        <p className="description">«Плаха» - это роман советского писателя Чингиза
                                            Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман
                                            рассказывает о судьбах двух людей — Авдия Каллистратова и Бостона
                                            Бейшеналиева, которые встречаются на берегу Иссык-Куля и отправляются вместе
                                            на поиски своих корней</p>
                                        <button className="item_button">Читать дальше</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    </div>
                <div className="first_slider">
                    <div className="slide">

                        <div className="slider_item">
                            <div className="item_inner">
                                <div className="slider_left"></div>
                                <div className="slider_right">
                                    <h2 className="title">Плаха</h2>
                                    <p className="author">Чингиз Айтматов</p>
                                    <p className="description">«Плаха» - это роман советского писателя Чингиза
                                        Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман рассказывает
                                        о судьбах двух людей — Авдия Каллистратова и Бостона Бейшеналиева, которые
                                        встречаются на берегу Иссык-Куля и отправляются вместе на поиски своих
                                        корней</p>
                                    <button className="item_button">Читать дальше</button>
                                </div>
                            </div>
                        </div>

                        <div className="slider_item">
                            <div className="item_inner">
                                <div className="slider_left"></div>
                                <div className="slider_right">
                                    <h2 className="title">Плаха</h2>
                                    <p className="author">Чингиз Айтматов</p>
                                    <p className="description">«Плаха» - это роман советского писателя Чингиза
                                        Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман рассказывает
                                        о судьбах двух людей — Авдия Каллистратова и Бостона Бейшеналиева, которые
                                        встречаются на берегу Иссык-Куля и отправляются вместе на поиски своих
                                        корней</p>
                                    <button className="item_button">Читать дальше</button>
                                </div>
                            </div>
                        </div>

                        <div className="slide" style={{display: "none"}}>

                            <div className="slider_item">
                                <div className="item_inner">
                                    <div className="slider_left"></div>
                                    <div className="slider_right">
                                        <h2 className="title">Плаха</h2>
                                        <p className="author">Чингиз Айтматов</p>
                                        <p className="description">«Плаха» - это роман советского писателя Чингиза
                                            Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман
                                            рассказывает о судьбах двух людей — Авдия Каллистратова и Бостона
                                            Бейшеналиева, которые встречаются на берегу Иссык-Куля и отправляются вместе
                                            на поиски своих корней</p>
                                        <button className="item_button">Читать дальше</button>
                                    </div>
                                </div>
                            </div>

                            <div className="slider_item">
                                <div className="item_inner">
                                    <div className="slider_left"></div>
                                    <div className="slider_right">
                                        <h2 className="title">Плаха</h2>
                                        <p className="author">Чингиз Айтматов</p>
                                        <p className="description">«Плаха» - это роман советского писателя Чингиза
                                            Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман
                                            рассказывает о судьбах двух людей — Авдия Каллистратова и Бостона
                                            Бейшеналиева, которые встречаются на берегу Иссык-Куля и отправляются вместе
                                            на поиски своих корней</p>
                                        <button className="item_button">Читать дальше</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    </div>
                <div className="first_slider">
                    <div className="slide">

                        <div className="slider_item">
                            <div className="item_inner">
                                <div className="slider_left"></div>
                                <div className="slider_right">
                                    <h2 className="title">Плаха</h2>
                                    <p className="author">Чингиз Айтматов</p>
                                    <p className="description">«Плаха» - это роман советского писателя Чингиза
                                        Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман рассказывает
                                        о судьбах двух людей — Авдия Каллистратова и Бостона Бейшеналиева, которые
                                        встречаются на берегу Иссык-Куля и отправляются вместе на поиски своих
                                        корней</p>
                                    <button className="item_button">Читать дальше</button>
                                </div>
                            </div>
                        </div>

                        <div className="slider_item">
                            <div className="item_inner">
                                <div className="slider_left"></div>
                                <div className="slider_right">
                                    <h2 className="title">Плаха</h2>
                                    <p className="author">Чингиз Айтматов</p>
                                    <p className="description">«Плаха» - это роман советского писателя Чингиза
                                        Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман рассказывает
                                        о судьбах двух людей — Авдия Каллистратова и Бостона Бейшеналиева, которые
                                        встречаются на берегу Иссык-Куля и отправляются вместе на поиски своих
                                        корней</p>
                                    <button className="item_button">Читать дальше</button>
                                </div>
                            </div>
                        </div>

                        <div className="slide" style={{display: "none"}}>

                            <div className="slider_item">
                                <div className="item_inner">
                                    <div className="slider_left"></div>
                                    <div className="slider_right">
                                        <h2 className="title">Плаха</h2>
                                        <p className="author">Чингиз Айтматов</p>
                                        <p className="description">«Плаха» - это роман советского писателя Чингиза
                                            Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман
                                            рассказывает о судьбах двух людей — Авдия Каллистратова и Бостона
                                            Бейшеналиева, которые встречаются на берегу Иссык-Куля и отправляются вместе
                                            на поиски своих корней</p>
                                        <button className="item_button">Читать дальше</button>
                                    </div>
                                </div>
                            </div>

                            <div className="slider_item">
                                <div className="item_inner">
                                    <div className="slider_left"></div>
                                    <div className="slider_right">
                                        <h2 className="title">Плаха</h2>
                                        <p className="author">Чингиз Айтматов</p>
                                        <p className="description">«Плаха» - это роман советского писателя Чингиза
                                            Айтматова, опубликованный в 1986 году в журнале «Новый мир». Роман
                                            рассказывает о судьбах двух людей — Авдия Каллистратова и Бостона
                                            Бейшеналиева, которые встречаются на берегу Иссык-Куля и отправляются вместе
                                            на поиски своих корней</p>
                                        <button className="item_button">Читать дальше</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    </div>
            </Slider>
            <div className="arrows">
                <div className="arrows_inner">
                    <div onClick={handlePrev} className="left_arrow"></div>
                    <div onClick={handleNext} className="right_arrow"></div>
                </div>
            </div>
        </div>
        );
}