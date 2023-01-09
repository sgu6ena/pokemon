import {FC, useState} from 'react';
import {Hexagon, HexGrid, Layout, Pattern, Text} from "react-hexgrid";
import styles from './kanto.module.scss'
import {config, hexagons, kantoLib, patterns} from "./kanto.data";


const KantoMap: FC = () => {
  const size = {x: config.layout.width, y: config.layout.height};
  const [id, setId] = useState<string | null>(null)

  return (
    <div className={styles.kanto}>
      <div className={' flex-shrink-0 '}>
        <HexGrid width={config.width} height={config.height}>
          <Layout flat={config.layout.flat} spacing={config.layout.spacing} origin={config.origin} size={size} >
            <>
              {
                hexagons.map((hex) => (
                  <>
                    <Hexagon
                      key={hex.id}
                      q={hex.q}
                      r={hex.r}
                      s={0}
                      className={styles.hexagon}
                      onClick={() => setId(hex.id)}
                      fill={hex.pattern}
                    >
                      <Text x={-3.3} y={-5}>{hex.id} </Text>
                      {hex.location.split(' ').length === 2 ?
                        <>
                          <Text x={0} y={-0.5}>{hex.location.split(' ')[0]} </Text>
                          <Text x={0} y={2}>{hex.location.split(' ')[1]} </Text>
                        </> :
                        <Text>{hex.location} </Text>
                      }
                    </Hexagon>
                    <Pattern id={hex.pattern} link={patterns[hex.pattern]} />
                  </>
                ))
              }


            </>
          </Layout>
        </HexGrid>
      </div>

      <div className={'p-5'}>
        <h2>{kantoLib[id]?.title}</h2>
       {kantoLib[id]?.text.map( p=><p>{p}</p>)}
      </div>
    </div>
  );
};

export default KantoMap;
