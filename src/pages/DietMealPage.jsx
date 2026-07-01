import { useParams, Link } from 'react-router-dom'

const BackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[20px] h-[20px]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
  </svg>
)

const FoodItem = ({ title, alternatives }) => (
  <div className="flex flex-col gap-[8px] text-[18px]">
    <p className="font-semibold text-black leading-normal">{title}</p>
    {alternatives && alternatives.length > 0 && (
      <ul className="list-disc ml-[27px] text-[#808080] leading-normal">
        {alternatives.map((alt, i) => <li key={i}>{alt}</li>)}
      </ul>
    )}
  </div>
)

const mealsData = {
  'cafe-manha': {
    time: '7:00',
    label: 'Café da manhã',
    bg: '#ffcccb',
    text: '#644645',
    items: [
      { title: 'Ovo de galinha refogado (2 unidades)', alternatives: ['Ou atum'] },
      { title: 'Pão de trigo ou francês (1 unidade)', alternatives: ['Ou pão integral (2 fatias)', 'Ou pão sírio grande (1 fatia)'] },
      { title: 'Muçarela (1 fatia)', alternatives: ['Ou requeijão (1 colher de sopa)'] },
      { title: 'Morango (140g)', alternatives: ['Ou qualquer outra fruta vermelha (140g)', 'Ou uva (120g)', 'Ou Banana (1 unidade)', 'Ou Maça média', 'Ou mamão (160g)', 'Ou melão (200g)'] },
    ],
  },
  'almoco': {
    time: '12:30',
    label: 'Almoço',
    bg: '#fed9a2',
    text: '#7a5724',
    items: [
      { title: 'Arroz branco, integral ou parbolizado (150g)', alternatives: ['Ou Abóbora Cabotia (350g)', 'Ou mandioca/Mandioquinha (150g)', 'OU batata inglesa (220g)', 'OU macarrão (150g)'] },
      { title: 'Feijão cozido (140g)', alternatives: ['Ou grão de bico (140g)', 'Ou lentilha (140g)', 'Ou vagem (140g)'] },
      { title: 'Filé de frango grelhado (180g)', alternatives: ['Ou tilápia (190g)', 'Ou salmão (150g)', 'Ou Patinho - Coxão mole - Alcatra - filé mignon - lombo suíno (170g)'] },
      { title: 'Alface lisa ou folhas verdes', alternatives: [] },
    ],
  },
  'cafe-tarde': {
    time: '16:30',
    label: 'Café da tarde',
    bg: '#96f4fe',
    text: '#166e77',
    items: [
      { title: 'Whey protein (30g proteína)', alternatives: [] },
      { title: 'Chia (10g)', alternatives: [] },
      { title: 'Maçã (pequena)', alternatives: ['Ou qualquer fruta (100g)'] },
      { title: 'Aveia em flocos (30g)', alternatives: ['Ou granola zero (30g)'] },
    ],
  },
  'jantar': {
    time: '20:00',
    label: 'Jantar',
    bg: '#c8ffec',
    text: '#256750',
    items: [
      { title: 'Arroz branco, integral ou parbolizado (110g)', alternatives: ['Ou Abóbora Cabotia (250g)', 'Ou mandioca/Mandioquinha (110g)', 'OU batata inglesa (140g)', 'OU macarrão (110g)'] },
      { title: 'Feijão cozido (110g)', alternatives: ['Ou grão de bico (110g)', 'Ou lentilha (110g)', 'Ou vagem (110g)'] },
      { title: 'Filé de frango grelhado (150g)', alternatives: ['Ou tilápia (170g)', 'Ou salmão (120g)', 'Ou Patinho - Coxão mole - Alcatra - filé mignon - lombo suíno (130g)'] },
      { title: 'Alface lisa ou folhas verdes', alternatives: [] },
    ],
  },
}

export default function DietMealPage() {
  const { mealId } = useParams()
  const meal = mealsData[mealId]

  if (!meal) {
    return (
      <div className="mx-auto w-full max-w-[393px] h-dvh flex items-center justify-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <p className="text-[18px] text-[#808080]">Refeição não encontrada</p>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-[393px] h-dvh flex flex-col overflow-hidden" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="flex-1 flex flex-col gap-[56px] px-[24px] overflow-y-auto pt-[24px] pb-[48px] no-scrollbar">
        {/* Header */}
        <div className="flex flex-col gap-[10px]">
          <Link to="/diet" className="w-[40px] h-[40px] flex items-center justify-center no-underline rounded-full border border-[#DDDDDD]">
            <BackIcon />
          </Link>
          <p className="text-[32px] font-semibold text-black leading-normal">Detalhes da refeição</p>
        </div>

        {/* Meal card */}
        <div className="rounded-[24px] p-[24px] flex items-start justify-center w-full" style={{ backgroundColor: meal.bg }}>
          <div className="flex flex-1 items-center justify-between" style={{ color: meal.text }}>
            <p className="text-[32px] font-bold">{meal.time}</p>
            <p className="text-[16px] font-semibold">{meal.label}</p>
          </div>
        </div>

        {/* Food items */}
        {meal.items.map((item, i) => (
          <FoodItem key={i} title={item.title} alternatives={item.alternatives} />
        ))}
      </div>
    </div>
  )
}
