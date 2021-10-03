import SectionTitle from '../components/section-title'
import Bar from '../components/charts/bar'
import Widget from '../components/widget'

export default function Index () {
  <>
    <SectionTitle title="Charts" subtitle="Bar charts" />
    <div className="flex flex-col">
      <div className="w-full">
        <Widget
          title="Simple bar charts"
          description={
            <span>
              Use the following examples as starting points for simple bar
              charts
            </span>
          }>

          <div className="w-full mb-4">
            <Bar height={200} />
          </div>
        </Widget>
      </div>

    </div>
  </>
}

