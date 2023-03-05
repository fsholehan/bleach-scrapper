import { useQuery } from "react-query";
import Card from "../../basic/Card";
import Flex from "../../basic/Flex";
import CardLoading from "../../basic/Loading/CardLoading";
import MetaTitle from "../../small/MetaTitle";
import { getPopular } from "../../../fetch";

function Popular() {
  const { isLoading, data } = useQuery("popular", getPopular);

  const popularCards = data?.map((res, i) => (
    <Card
      key={i}
      title={res.title}
      episode={res.episode}
      thumbnail={res.thumbnail}
      href={`/watch/${res.slug}`}
      isOverFlow
    />
  ));

  const loadingCards = Array(4)
    .fill(1)
    .map((_, i) => <CardLoading key={i} isMlActive />);

  return (
    <div>
      <MetaTitle title="Populer" />
      <Flex>
        {isLoading && <>{loadingCards}</>}
        {popularCards}
      </Flex>
    </div>
  );
}

export default Popular;
