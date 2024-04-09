import { useContext } from 'react';
import { CommandsContext } from '@/context/CommandsContext';
import SVGCommandsEconomy from '@/components/5Entities/SVG/SVGCommandsEconomy';

export default function CategoriesEconomyBtn() {
  const { toggleCategory } = useContext(CommandsContext);

  return (
    <button
      id='economy'
      className='commands_category_btn'
      onClick={() => toggleCategory('economy')}>
      <SVGCommandsEconomy />
      Экономика
    </button>
  );
}
