import { Grid, Item } from '../..';
interface Props {
  id?: string | number;
  subtitle: string;
  title: string;
  image: string;
  played_at?: string;
  uri?: string;
  type?: string;
  popularity?: number;
}
interface SectionProps {
  data: Props[];
  loading?: boolean;
  cols?: number;
  text?: string;
  bg?: string;
}

const Carousel = ({ data, cols = 7 }: SectionProps) => {
  return (
    <Grid cols={cols} gap={'8px 20px'}>
      {data.map((singleData, index) => {
        return (
          <Item width={300} key={singleData?.id || index} {...singleData} />
        );
      })}
    </Grid>
  );
};

export default Carousel;

//skeleton
// {loading ? skeleton() : drawRecentlPlayed()}
