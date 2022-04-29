import { HeartButton, EthIcon } from 'components';
import { Constants } from 'configs';

type Props = {
  imgUrl: string;
  name: string;
  authorName: string | undefined;
  ethPrice: number;
  isLiked: boolean;
  onClick: VoidFunction;
  onLike: VoidFunction;
};

export function Card({ imgUrl, name, authorName, ethPrice, isLiked, onClick, onLike }: Props) {
  return (
    <div className="bg-white shadow-lg rounded-md">
      <div
        style={{ backgroundImage: `url(${Constants.ApiBaseUrl}/${imgUrl})` }}
        className="bg-cover w-full h-[242.5px] cursor-pointer"
        onClick={onClick}
      ></div>
      <div className="w-full flex items-center p-4">
        <div className="flex-1">
          <p className="font-display font-bold">{name}</p>
          <p className="pb-1">{authorName}</p>
          <div className="flex items-center">
            <EthIcon />
            <p className="pl-2">{ethPrice}</p>
          </div>
        </div>
        <div>
          <HeartButton isLiked={isLiked} onClick={onLike} />
        </div>
      </div>
    </div>
  );
}
