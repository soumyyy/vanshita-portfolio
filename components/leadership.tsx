import { Award } from "lucide-react"

export function Leadership() {
  return (
    <section className="py-20 bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-primary/10">
          <div className="p-4 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bold text-xl mb-2 font-serif">Economics Column Editor</h3>
            <p className="text-muted-foreground">Sophia College E-Magazine</p>
          </div>
          <div className="p-4 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bold text-xl mb-2 font-serif">Marketing Coordinator</h3>
            <p className="text-muted-foreground">Kaleidoscope Annual Fest</p>
          </div>
          <div className="p-4 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bold text-xl mb-2 font-serif">Top Performer</h3>
            <p className="text-muted-foreground">Recognized for rapid client acquisition</p>
          </div>
        </div>
      </div>
    </section>
  )
}
