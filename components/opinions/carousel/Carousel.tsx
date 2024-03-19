import { EmblaOptionsType } from "embla-carousel";
import {
	PrevButton,
	NextButton,
	usePrevNextButtons,
} from "./CarouselArrowBtns";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
	options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi);

	return (
		<section className="carousel">
			<div className="carousel__viewport" ref={emblaRef}>
				<div className="carousel__container">
					<p className="carousel__slide">
						Kasia to zafascynowana językiem i potrafiąca przekazać tę fascynację
						dalej. Z pasją dokłada wszelkich starań, by przytoczyć kwestie i
						rozwiać wątpliwości. Gdy brakuje mi jakiegoś słowa, umie temu
						zaradzić, taktownie zachęcają do pokonywania trudności. Jej lekcje
						zawsze wnoszą coś nowego. Cieszę się, że na moeje drodze poznawania
						języka niemieckiego miałam szczęście spotkać tak wyjątkową
						nauczycielkę. Jola
					</p>
					<p className="carousel__slide">
						Ehrliche Meinung: Kasia = sehr freundlich, geduldige und glückliche
						Person. Es ist ein Vergnügung, die Nachhilfe mit ihr zu haben. Sie
						ist der perfekte Lehrerin, weil sie nach dem Unterricht die Zeit
						nimmt meine Hausaufgaben zu checken. Sie ist immer im Unterricht
						vorbereitet. Sie korrigiert Fehler während des Gesprächs, was mir am
						wichtigsten ist. Ich empfehle Kasia von ganzem Herzen ❤ Milena
					</p>
					<p className="carousel__slide">
						Miałem już kilku korepetytorów, takich którzy mnie nie słuchali,
						robili coś innego, również byli tacy u których lekcja zaczynała się
						po 20 minutach. U Kasi nic takiego się nie dzieje, jest w pełni
						profesjonalna w tym co robi, zawsze skupiona na tym o czym
						rozmawiamy, w pełni zaangażowana i zmotywowana (czasem bardziej niż
						ja). Kasia jest serdeczną i miłą osobą obdarzoną dużą dozą
						cierpliwości. Poświęca mnóstwo czasu poza zajęciami na sprawdzanie
						zadań domowych, z czym spotkałem się poraz pierwszy. A jej zajęcia
						przede wszystkim nie są nudne, zawsze w jakiś sposób urozmaicone i
						inne. Z czystym sumienieniem polecam Kasię! Michał :)
					</p>
					<p className="carousel__slide">
						Zajęcia z Kasią były świetne przede wszystkim ze względu na
						możliwość uczestniczenia w parze. Godzina mijała bardzo szybko,
						wszelkie ćwiczenia były bardzo interesujące i angażujące. To
						sprawiło, że nauka języka niemieckiego stała się przyjemnością, a
						nie przykrą koniecznością. Natalia, Jakub
					</p>
				</div>
			</div>
			<div className="carousel__controls">
				<div className="carousel__buttons">
					<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
					<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
				</div>
			</div>
		</section>
	);
};

export default EmblaCarousel;
