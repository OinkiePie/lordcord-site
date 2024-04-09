import { useState } from 'react';
import SVGInfo from '@/components/5Entities/SVG/SVGInfo';
import SVGExpand from '@/components/5Entities/SVG/SVGExpand';
import InfoPrefix from '@/components/5Entities/Commands/InfoPrefix';
import InfoParams from '@/components/5Entities/Commands/InfoParams';

export default function CommandsInfo() {
  const [opened, setOpened] = useState(false);

  return (
    <div
      tabIndex='0'
      aria-label='Справка: Стандартный префикс l точка Вы можете поменять его в панели управления. Можно использовать упоминание бота. квадратные скобки — Опциональный параметр, <> — Обязательный параметр, A вертикальный слеш Б — Выбор параметра'>
      <div className={`commands_sidebar_info ${opened ? 'opened' : ''}`}>
        <div
          className='commands_sidebar_info_title'
          onClick={() => setOpened(!opened)}>
          <div className='w-full flex items-center gap-4'>
            <SVGInfo /> Справка
          </div>
          <SVGExpand />
        </div>
        <div className='commands_sidebar_info_body'>
          <div className='flex min-h-0 flex-col invisible opacity-0 transition-all duration-200 ease-out-max px-1'>
            <InfoPrefix />
            <hr className='mb-2 border-main-purple' />
            <InfoParams />
          </div>
        </div>
      </div>
    </div>
  );
}
