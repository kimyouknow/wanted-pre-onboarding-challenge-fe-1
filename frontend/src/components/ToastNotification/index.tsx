import { useEffect, useRef, useState } from 'react';

import { ToastElementType } from '@/types/toastNotification.type';

import * as S from './style';

interface ToastNotificationProps {
  toastList: ToastElementType[];
  col: S.ColType;
  row: S.RowType;
  autoDelete: boolean;
  autoDeleteTime: number;
  deleteCallback: (id: string) => void;
}

const ToastNotification = ({
  toastList,
  col,
  row,
  autoDelete,
  autoDeleteTime,
  deleteCallback,
}: ToastNotificationProps) => {
  const timeId: { current: NodeJS.Timeout | undefined } = useRef();
  const [list, setList] = useState(toastList);
  const position: S.ToastNotificationPositionType = `${col}-${row}`;
  useEffect(() => {
    setList(toastList);
  }, [toastList]);

  useEffect(() => {
    timeId.current = setInterval(() => {
      if (autoDelete && list.length) {
        deleteCallback(list[0].id);
      }
    }, autoDeleteTime);

    return () => {
      clearInterval(timeId.current);
    };
  }, [toastList, autoDelete, autoDeleteTime, list, deleteCallback]);

  return (
    <S.Container positionType={position} startPoint={row}>
      {list.map(({ id, type, description }) => (
        <S.Notification key={id} type={type} positionType={position} startPoint={row}>
          <S.Image></S.Image>
          <S.Info>
            <h3>{type}</h3>
            <p>{description}</p>
          </S.Info>
          <button type="button" onClick={() => deleteCallback(id)}>
            X
          </button>
        </S.Notification>
      ))}
    </S.Container>
  );
};

export default ToastNotification;
