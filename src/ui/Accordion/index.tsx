import { Link } from "react-router-dom"

function MyAccordion() {
    return (
        <>
            <div className="collapse collapse-arrow text-white border-white border bg-stone ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Oyunların ödəniş üsulu necə olur?</div>
                <div className="collapse-content">
                    <p>Ödənişlər həm hissəli həm də nəğd olabilir. Diqqətinizə çatdıraq ki,hissəli ödəniş zamanı faiz tutulmur.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow  text-white border-white border bg-stone ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Oyunlarınız yalnız PC üçündür?</div>
                <div className="collapse-content">
                    <p>Əlbəttə ki xeyr, bizim oyunlarımızı AppStore və ya PlayStore'dan əldə edə bilərsiniz.</p>
                    <p>play Store : <Link className="hover:text-red font-bold" to={'https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf&pcampaignid=web_share'}>Console game</Link></p>
                </div>
            </div>
            <div className="collapse collapse-arrow  text-white border-white border bg-stone ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Sizinlə əməkdaşlıq etmək mümkündür ?</div>
                <div className="collapse-content flex flex-col gap-1">
                    <p>Əlbəttə,bunun üçün bizə zəng edə və ya ofisimizə yaxınlaşa bilərsiniz.</p>
                    <Link to={'tel: +994 55 774 85 48'}>tel:+994 55 774 85 48</Link>
                    <Link to={'/contact'}>Ofisimiz: keçid</Link>
                </div>
            </div>
        </>
    )
}

export default MyAccordion
