export interface ITrip {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: number;
  price: number;
  image: string;
  createdAt: string;
}

export interface ITripObject {
  trip: ITrip;
}

export interface ITripPopupProps {
  trip: ITrip;
  onClose: () => void;
}