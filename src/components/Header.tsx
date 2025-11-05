import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Estate Pro</h1>
        <nav className="hidden md:flex gap-8">
          <a href="#hero" className="text-foreground hover:text-primary transition-colors">Главная</a>
          <a href="#benefits" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
          <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Цены</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
        </nav>
        <Button className="hidden md:block">Консультация</Button>
      </div>
    </header>
  );
}
