export interface MDfile {
  id: number;
  uuid: string;
  mdURL: string;
  author: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IMetaData {
  title: string;
  author: string;
  readtime: string;
  description: string;
  date: string;
  tags: string;
  image?: string;
}

export interface IArticle {
  metadata: IMetaData & {
    date: Date;
    tags: string[];
  };
  content: string;
}

export interface IExperience {
  name: string;
  icon: string;
  startYear: string;
  endYear: string;
  position: string;
  softSkills: string[];
  hardSkills: string[];
}
