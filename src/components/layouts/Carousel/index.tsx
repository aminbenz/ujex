import { Box, Grid } from '../..';
interface Props {
  id?: string | number;
  description: string;
  title: string;
  avatar: string;
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
    <div className="carousel">
      <Grid cols={cols} gap={'8px 20px'}>
        {data.map((singleData, index) => {
          return (
            <Box
              loading={true}
              width={300}
              key={singleData?.id || index}
              data={singleData}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default Carousel;

//skeleton
// {loading ? skeleton() : drawRecentlPlayed()}
