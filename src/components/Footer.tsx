export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Estate Pro</h3>
            <p className="text-white/70">
              Профессиональное агентство недвижимости с 2014 года
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#services" className="hover:text-white transition-colors">Покупка</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Продажа</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Аренда</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Коммерческая</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#benefits" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-white/70">
              <li>+7 (495) 123-45-67</li>
              <li>info@estatepro.ru</li>
              <li>Москва, ул. Тверская, 15</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-white/70">
          <p>© 2024 Estate Pro. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
