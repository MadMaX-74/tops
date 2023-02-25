import Htag from "@/components/Htag/Htag";
import Button from "@/components/Button/Button";
import Ptag from "@/components/Ptag/Ptag";
import Tag from "@/components/Tag/Tag";
import Rating from "@/components/Rating/Rating";
import {withLayout} from "../../layout/Layout";

function Home(): JSX.Element {
  return (
    < >
        <Htag tag='h1'>Курсы по Photoshop</Htag>
        <Button appearance="primary">Узнать подробнее</Button>
        <Button appearance="ghost" arrow="right">Узнать подробнее</Button>
        <Ptag>
            Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.
        </Ptag>
        <Tag>Photoshop</Tag>
        <Rating rating={4} isEditable/>
    </>
  );
}
export default withLayout(Home);
