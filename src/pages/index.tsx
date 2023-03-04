import Htag from "@/components/Htag/Htag";
import Button from "@/components/Button/Button";
import Ptag from "@/components/Ptag/Ptag";
import Tag from "@/components/Tag/Tag";
import {Rating} from "@/components/Rating/Rating";
import {withLayout} from "@/layout/Layout";
import {GetStaticProps} from "next";
import * as process from "process";
import {MenuItem} from "@/interfaces/menu.interface";
import axios from "axios";
import {Input} from "@/components/Input/Input";
import {Textarea} from "@/components/Textarea/Textarea";

function Home({menu} :HomeProps): JSX.Element {
  return (
    <>
        <Htag tag='h1'>Курсы по Photoshop</Htag>
        <Button appearance="primary">Узнать подробнее</Button>
        <Button appearance="ghost" arrow="right">Узнать подробнее</Button>
        <Ptag>
            Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.
        </Ptag>
        <Tag>Photoshop</Tag>
        <Rating rating={4} isEditable/>
        <Input placeholder="test" />
        <Textarea placeholder="test" />
    </>
  );
}
export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        props : {
            menu,
            firstCategory
        }
    };
};
interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[];
    firstCategory: number;
}
