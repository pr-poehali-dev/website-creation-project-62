import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section id="hero" className="pt-24 pb-16 bg-gradient-to-b from-secondary to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Найдём идеальную недвижимость для вас
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Профессиональное сопровождение сделок с недвижимостью. Более 500 успешных клиентов за 10 лет работы.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="text-lg px-8">
                Бесплатная консультация
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Каталог объектов
              </Button>
            </div>
          </div>
          <div className="animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/projects/62760490-dbe9-4662-bff1-61be80f24563/files/966db426-4602-4801-8083-713fef7f8992.jpg" 
              alt="Недвижимость премиум класса"
              className="rounded-lg shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
