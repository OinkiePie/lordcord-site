import Dignity from '../../5Entities/Home/Dignity';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';
import image from '@/Assets/E.png';

export default function EDignity() {
  const { t } = useContext(LangChangingContext);

  return (
    <Dignity
      postition='right'
      title={t('main.dignity.fifthTitle')}
      body={t('main.dignity.fifthContent')}
      avatar={image}
    />
  );
}
