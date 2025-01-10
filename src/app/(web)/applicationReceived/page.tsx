import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthStore } from "../../../store/useAuthStore";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ApplicationReceived: React.FC = () => {
  const router = useRouter();
  const { isAuth } = useAuthStore((state) => ({
    isAuth: state.isAuth,
  }));

  useEffect(() => {
    if (isAuth) {
      router.push("/");
    }
  }, [isAuth, router]);

  return (
    <div className="application-received">
      <div>
        <h1>
          Спасибо!
          <br />
          Заявка отправлена
        </h1>
        <span>Мы свяжемся с вами в ближайшее время</span>
      </div>
      <div className="suscribe">
        <a
          href="https://www.facebook.com/systemflytj"
          className="text-gray-500 transition-all hover:scale-110"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="h-9 w-9 text-[#1877F2]"
          />
        </a>
        <small>
          Читайте о трендах и инсайтах бизнес-тревела в Facebook -
          Командировки.Сегодня
        </small>
        <a
          href="https://www.facebook.com/systemflytj"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn">Подписаться</button>
        </a>
      </div>
    </div>
  );
};

export default ApplicationReceived;
