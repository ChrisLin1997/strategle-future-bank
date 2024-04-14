import MarketContainer from '@/context/marketContext'
import { formatAmount } from '@/utils'

const MainQuote = () => {
  const { ticker } = MarketContainer.useContainer()

  const mainQuoteList = [
    { name: 'S&P 500', symbol: '^GSPC', icon: '/images/index.png' },
    { name: 'Apple', symbol: 'AAPL', icon: '/images/usstock/aapl.png' },
    { name: 'BTC', symbol: 'BTCUSDT', icon: '/images/crypto/BTCUSDT.png' },
    { name: 'GOLD', symbol: 'GOLD', icon: '/images/commodity/gold.png' },
    { name: 'Crude Oil', symbol: 'CRUDE_OIL', icon: '/images/commodity/petrol.png' },
  ]

  return (
    <div className="px-4 py-2 w-1/2 md:w-1/3 flex flex-col rounded-xl shadow bg-white">
      <div className="text-lg text-secondary font-bold">Main Quotes</div>
      <div className="mt-auto pl-3 py-3 flex flex-col gap-2">
        {mainQuoteList.map(item => (
          <article key={item.symbol} className="flex items-center gap-3">
            <div className="w-7 h-7">
              <img src={item.icon} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 font-bold truncate">{item.name}</div>

            <div className="flex-1 text-right font-bold text-secondary">$ {ticker[item.symbol] ? formatAmount(ticker[item.symbol].price, 2) : '-'}</div>
          </article>
        ))}

      </div>
    </div>
  )
}

export default MainQuote
