import {FC} from 'react';
import {Hexagon, HexGrid, Layout, Pattern, Text} from "react-hexgrid";
import styles from './kanto.module.scss'

export interface hex {
  q: number
  r: number
  s: number
  name: string
  location?: 'лес' | 'поляна' | 'побережье' | 'канализация' | 'концертный зал'
    | 'сафари' | 'компьютерный клуб' | 'дом' | 'студия карате'
    | 'танцевальный клуб' | 'пещера' | 'океан' | 'студия бокса' | 'студия реслинга'
    | 'клиника' | 'цирк' | 'заброшенная электростанция' | 'каменистая равнина'
  classname?: string
}

const hexagons: hex[] = [
  {
    q: -0, r: 1, s: 0, name: '2A', location: 'студия карате', classname: 'q'
  },
  {
    q: -0, r: 2, s: 0, name: '4A', location: 'сафари'
  },
  {
    q: -0, r: 3, s: 0, name: '6A', location: 'сафари'
  },
  {
    q: -0, r: 4, s: 0, name: '8A', location: 'заброшенная электростанция'
  },
  {
    q: -0, r: 5, s: 0, name: '10A', location: 'каменистая равнина'
  },
  {
    q: 1, r: 0, s: 0, name: '1B', location: 'танцевальный клуб'
  },
  {
    q: 1, r: 1, s: 0, name: '3B', location: 'компьютерный клуб'
  },
  {
    q: 1, r: 2, s: 0, name: '5B', location: 'сафари'
  },
  {
    q: 1, r: 3, s: 0, name: '7B', location: 'цирк'
  },
  {
    q: 1, r: 4, s: 0, name: '9B', location: 'студия бокса'
  },
  {
    q: 2, r: 0, s: 0, name: '2C', location: 'канализация'
  },
  {
    q: 2, r: 1, s: 0, name: '4C', location: 'лес'
  },
  {
    q: 2, r: 2, s: 0, name: '6C', location: 'поляна'
  },
  {
    q: 2, r: 3, s: 0, name: '8C', location: 'клиника'
  },
  {
    q: 2, r: 4, s: 0, name: '10C', location: 'побережье'
  },
  {
    q: 3, r: -1, s: 0, name: '1D', location: 'пещера'
  },
  {
    q: 3, r: 0, s: 0, name: '3D', location: 'лес'
  },
  {
    q: 3, r: 1, s: 0, name: '5D', location: 'поляна'
  },
  {
    q: 3, r: 2, s: 0, name: '7D', location: 'поляна'
  },
  {
    q: 3, r: 3, s: 0, name: '9D', location: 'побережье'
  },
  {
    q: 4, r: -1, s: 0, name: '2E', location: 'поляна'
  },
  {
    q: 4, r: 0, s: 0, name: '4E', location: 'лес'
  },
  {
    q: 4, r: 1, s: 0, name: '6E', location: 'дом'
  },
  {
    q: 4, r: 2, s: 0, name: '8E', location: 'побережье'
  },
  {
    q: 4, r: 3, s: 0, name: '10E', location: 'океан'
  },
  {
    q: 5, r: -2, s: 0, name: '1F', location: 'пещера'
  },
  {
    q: 5, r: -1, s: 0, name: '3F', location: 'лес'
  },
  {
    q: 5, r: 0, s: 0, name: '5F', location: 'лес'
  },
  {
    q: 5, r: 1, s: 0, name: '7F', location: 'побережье'
  },
  {
    q: 5, r: 2, s: 0, name: '9F', location: 'океан'
  },
  {
    q: 6, r: -2, s: 0, name: '2G', location: 'лес'
  },
  {
    q: 6, r: -1, s: 0, name: '4G', location: 'поляна'
  },
  {
    q: 6, r: 0, s: 0, name: '6G', location: 'побережье'
  },
  {
    q: 6, r: 1, s: 0, name: '8G', location: 'океан'
  },
  {
    q: 6, r: 2, s: 0, name: '10G', location: 'побережье'
  },
  {
    q: 7, r: -3, s: 0, name: '1H', location: 'студия реслинга'
  },
  {
    q: 7, r: -2, s: 0, name: '3H', location: 'концертный зал'
  },
  {
    q: 7, r: -1, s: 0, name: '5H', location: 'побережье'
  },

  {
    q: 7, r: 0, s: 0, name: '7H', location: 'океан'
  },
  {
    q: 7, r: 1, s: 0, name: '9H', location: 'пещера'
  },

]


const config = {

  "width": 1200,
  "height": 800,
  "layout": {"width": 9, "height": 9, "flat": true, "spacing": 1},
  "origin": {"x": -60, "y": -48},
}
const KantoMap: FC = () => {
  const layout = config.layout;
  const size = {x: layout.width, y: layout.height};


  return (
    <div className={styles.kanto}>
      <HexGrid width={config.width} height={config.height}>
        <Layout flat={config.layout.flat} spacing={config.layout.spacing} origin={config.origin} size={size}>
          {
            hexagons.map((hex:hex ) => (
              <>
                <Hexagon
                  key={hex.name}
                  q={hex.q}
                  r={hex.r}
                  s={0}
                  className={hex.classname}
                >
                  <Text x={-3.3} y={-6}>{hex.name} </Text>
                  {hex.location.split(' ').length===2 ?
                    <>
                      <Text x={0} y={-0.5}>{hex.location.split(' ')[0]} </Text>
                      <Text x={0} y={2}>{hex.location.split(' ')[1]} </Text>
                      </>:
                    <Text>{hex.location} </Text>
                  }
                </Hexagon>
              </>
            ))
          }
          {/*<Pattern id="pattern1" link="https://picsum.photos/200?image=80" />*/}
          {/*<Pattern id="pattern2" link="https://picsum.photos/200?image=82" />*/}
        </Layout>
      </HexGrid>
    </div>
  );
};

export default KantoMap;
