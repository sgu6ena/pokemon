export interface hex {
  q: number
  r: number
  id: string
  location?: 'лес' | 'поляна' | 'побережье' | 'канализация' | 'концертный зал'
    | 'сафари' | 'компьютерный клуб' | 'дом' | 'студия карате'
    | 'танцевальный клуб' | 'пещера' | 'океан' | 'студия бокса' | 'студия реслинга'
    | 'клиника' | 'цирк' | 'заброшенная электростанция' | 'каменистая равнина'
  classname?: string
  pattern?: string
}

export const hexagons: hex[] = [
  {
    q: -0, r: 1, id: '2A', location: 'студия карате'
  },
  {
    q: -0, r: 2, id: '4A', location: 'сафари'
  },
  {
    q: -0, r: 3, id: '6A', location: 'сафари'
  },
  {
    q: -0, r: 4, id: '8A', location: 'заброшенная электростанция'
  },
  {
    q: -0, r: 5, id: '10A', location: 'каменистая равнина'
  },
  {
    q: 1, r: 0, id: '1B', location: 'танцевальный клуб'
  },
  {
    q: 1, r: 1, id: '3B', location: 'компьютерный клуб'
  },
  {
    q: 1, r: 2, id: '5B', location: 'сафари'
  },
  {
    q: 1, r: 3, id: '7B', location: 'цирк'
  },
  {
    q: 1, r: 4, id: '9B', location: 'студия бокса'
  },
  {
    q: 2, r: 0, id: '2C', location: 'канализация'
  },
  {
    q: 2, r: 1, id: '4C', location: 'лес', pattern: 'forest',
  },
  {
    q: 2, r: 2, id: '6C', location: 'поляна', pattern:'glade'
  },
  {
    q: 2, r: 3, id: '8C', location: 'клиника'
  },
  {
    q: 2, r: 4, id: '10C', location: 'побережье', pattern:'pesok'
  },
  {
    q: 3, r: -1, id: '1D', location: 'пещера'
  },
  {
    q: 3, r: 0, id: '3D', location: 'лес', pattern: 'forest'
  },
  {
    q: 3, r: 1, id: '5D', location: 'поляна', pattern:'glade'
  },
  {
    q: 3, r: 2, id: '7D', location: 'поляна', pattern:'glade'
  },
  {
    q: 3, r: 3, id: '9D', location: 'побережье', pattern:'pesok'
  },
  {
    q: 4, r: -1, id: '2E', location: 'поляна', pattern:'glade'
  },
  {
    q: 4, r: 0, id: '4E', location: 'лес', pattern: 'forest'
  },
  {
    q: 4, r: 1, id: '6E', location: 'дом', pattern: 'forest'
  },
  {
    q: 4, r: 2, id: '8E', location: 'побережье', pattern:'pesok'
  },
  {
    q: 4, r: 3, id: '10E', location: 'океан', pattern:'water'
  },
  {
    q: 5, r: -2, id: '1F', location: 'пещера'
  },
  {
    q: 5, r: -1, id: '3F', location: 'лес', pattern: 'forest'
  },
  {
    q: 5, r: 0, id: '5F', location: 'лес', pattern: 'forest'
  },
  {
    q: 5, r: 1, id: '7F', location: 'побережье', pattern:'pesok'
  },
  {
    q: 5, r: 2, id: '9F', location: 'океан', pattern:'water'
  },
  {
    q: 6, r: -2, id: '2G', location: 'лес', pattern: 'forest'
  },
  {
    q: 6, r: -1, id: '4G', location: 'поляна', pattern:'glade'
  },
  {
    q: 6, r: 0, id: '6G', location: 'побережье', pattern:'pesok'
  },
  {
    q: 6, r: 1, id: '8G', location: 'океан', pattern:'water'
  },
  {
    q: 6, r: 2, id: '10G', location: 'побережье', pattern:'pesok'
  },
  {
    q: 7, r: -3, id: '1H', location: 'студия реслинга'
  },
  {
    q: 7, r: -2, id: '3H', location: 'концертный зал'
  },
  {
    q: 7, r: -1, id: '5H', location: 'побережье', pattern:'pesok'
  },
  {
    q: 7, r: 0, id: '7H', location: 'океан', pattern:'water'
  },
  {
    q: 7, r: 1, id: '9H', location: 'пещера'
  },

]

export const patterns = {
  'forest':'/maps/kanto/forest2.jpg',
  'glade':'/maps/kanto/glade.jpg',
  'water':'/maps/kanto/water.jpg',
  'pesok':'/maps/kanto/pesok.jpg'
}


export const config = {
  "width": 950,
  "height": 800,
  "layout": {"width": 9, "height": 8, "flat": true, "spacing": 1},
  "origin": {"x": -50, "y": -48},
}


export interface IKantoLib {
  [key: string]: {
    title: string,
    text: string[]
  }
}

export const kantoLib: IKantoLib = {
  '2A': {
    title: 'КАМЕННЫЙ СТАДИОН',
    text: ['2 покемона разных типов: боевого, травяного, земляного, стального, водного.',
      'Тема вызова: СТРАНА.',
      'За победу вы получите: КАМЕННЫЙ значок (он единоразово добавляет 1ед. опыта ВСЕМ вашим каменным покемонам).',
      'В награду за три значка с местных стадионов вы можете выбрать одного из следующих покемонов: Бульбазавр, Сквиртл, Чармандер.',
      "В местной СТУДИИ КАРАТЕ тренируется Хитманли.",
      "Потребуется психический или водный покемон от 5 уровня.",
      "Тема для вызова: самураи, бусидо, ниндзя, азиатские боевые искусства."]
  },

  '4A': {
    title: "ЗООПАРК, САФАРИ",
    text: [`Для поимки покемонов в зоопарке потребуется: покебол, входной билет (10 золотых).`,
      `Посещать зоопарк можно с любой частотой.`,
      'Для поимки покемонов в сафари потребуется: сафарибол, рабочая или туристическая виза.',
      'Посещение 1 раз в месяц. Ловля покемонов происходит строго по порядку, начиная с Тороса.',
      '1. Торос.', 'Потребуется покемон: вода от 5 уровня.',
      'Тема для вызова: преступники и маньяки.',
      'Минимальное количество страниц: 500.',
      '2. Дроузи.',
      'Потребуется покемон: лёд от 5 уровня.',
      'Тема для вызова: сны, коматозные состояния и галлюцинации.',
      'Минимальное количество страниц: 400.',
      '3. Слоупок.',
      'Потребуется покемон: камень от 5 уровня.',
      'Тема для вызова: нон-фикшн по самоорганизации, тайм-менеджменту, самосовершенствованию.',
      'Минимальное количество страниц: 100']
  }
}