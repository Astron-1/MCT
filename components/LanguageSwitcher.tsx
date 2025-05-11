import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { languages } from '@/app/i18n/settings';

interface LanguageSwitcherProps {
  currentLang: string;
}

const languageNames = {
  en: 'English',
  hi: 'हिंदी'
};

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const router = useRouter();

  const handleLanguageChange = (lang: string) => {
    // Update the URL to change language
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${lang}`);
    router.push(newPath);
  };

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <Button
          key={lang}
          variant={currentLang === lang ? "default" : "outline"}
          size="sm"
          onClick={() => handleLanguageChange(lang)}
          className="min-w-[70px]"
        >
          {languageNames[lang as keyof typeof languageNames]}
        </Button>
      ))}
    </div>
  );
} 