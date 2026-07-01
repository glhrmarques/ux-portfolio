import { Link } from 'react-router-dom'

const meals = [
  { time: '7:00', label: 'Café da manhã', to: '/diet/cafe-manha', bg: '#ffcccb', text: '#644645' },
  { time: '12:30', label: 'Almoço', to: '/diet/almoco', bg: '#fed9a2', text: '#7a5724' },
  { time: '16:30', label: 'Café da tarde', to: '/diet/cafe-tarde', bg: '#96f4fe', text: '#166e77' },
  { time: '20:00', label: 'Jantar', to: '/diet/jantar', bg: '#c8ffec', text: '#256750' },
]

export default function DietPage() {
  return (
    <div className="mx-auto w-full max-w-[393px] h-dvh flex flex-col overflow-hidden" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="flex-1 flex flex-col gap-[56px] justify-center px-[24px]">
        <div className="flex flex-col gap-[10px]">
          <div className="w-[64px] h-[64px] rounded-full bg-[#f3f5f9] flex items-center justify-center">
            <span className="text-[22px] font-bold text-[#555]">R</span>
          </div>
          <p className="text-[32px] font-semibold text-black leading-normal">Olá, Roseli</p>
        </div>

        <div className="flex flex-col w-full">
          {meals.map((meal, i) => (
            <Link
              key={meal.to}
              to={meal.to}
              className={`rounded-[24px] h-[225px] p-[24px] flex items-start justify-center w-full no-underline${i < meals.length - 1 ? ' mb-[-139px]' : ''}`}
              style={{ backgroundColor: meal.bg }}
            >
              <div className="flex flex-1 items-center justify-between" style={{ color: meal.text }}>
                <p className="text-[32px] font-bold">{meal.time}</p>
                <p className="text-[16px] font-semibold">{meal.label}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
