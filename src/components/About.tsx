import Githublogo from "../ui/githubLogo";
import TelegramLogo from "../ui/telegramLogo";
import PdfLogo from "../ui/pdfLogo";
import Tags from "../ui/Tags";

const About = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-2xl font-bold">
            привет, я Абубакир <span className="wave">👋</span>
          </p>
          <p>фронтенд разработчик с коммерческим опытом из Алматы 🍏</p>
          <p>
            свободно разговариваю на казахском, русском и английском языках.
            изучаю немецкий и японский. Решаю задачи на leetcode
          </p>

          <div className="flex flex-rowitems-center gap-5 px-4">
            <ul className="list-disc w-1/2">
              <li>react.js</li>
              <li>javascript</li>
              <li>typescript</li>
              <li>html</li>
              <li>css</li>
            </ul>
            <ul className="list-disc w-1/2">
              <li>jira</li>
              <li>figma</li>
              <li>linux/windows terminal</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-3 h-10 items-center">
          <Tags text={["resume"]} img={<PdfLogo />} />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/abukajary/"
          >
            <Githublogo />
          </a>
          <a
            href="https://t.me/Psychopath_Sleepwalker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramLogo />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center h-full">
        <img
          className="rounded-xl h-full object-cover"
          src="/me.jpg"
          alt=":("
        />
      </div>
    </div>
  );
};

export default About;
