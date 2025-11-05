import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Отзывы клиентов</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">Что говорят те, кто уже работал с нами</p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Искали квартиру 3 месяца самостоятельно. С Estate Pro нашли идеальный вариант за неделю. Оформили всё быстро и без проблем. Рекомендую!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-primary">АМ</span>
                </div>
                <div>
                  <p className="font-semibold">Анна Михайлова</p>
                  <p className="text-sm text-muted-foreground">Москва</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Продавали квартиру через агентство. Профессиональный подход на всех этапах. Сделку провели чисто, получили свои деньги в срок."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-primary">ДК</span>
                </div>
                <div>
                  <p className="font-semibold">Дмитрий Ковалёв</p>
                  <p className="text-sm text-muted-foreground">Санкт-Петербург</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Отличное агентство! Помогли найти офис для нашего бизнеса. Учли все пожелания, нашли локацию с хорошим трафиком."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-primary">ЕС</span>
                </div>
                <div>
                  <p className="font-semibold">Елена Соколова</p>
                  <p className="text-sm text-muted-foreground">Екатеринбург</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
