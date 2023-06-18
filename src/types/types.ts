export interface Book {
	ID: string;
	title: string;
	authors: string[];
	publisher: string;
	publishedDate: string;
	thumbnail: string;
}

export interface Item {
	volumeInfo: {
		title?: string;
		authors?: string[];
		publisher?: string;
		publishedDate?: string;
		imageLinks?: {
			thumbnail?: string;
		};
	};
	id: string;
}

export interface BookInfo {
	thumbnail?: string;
	description: string;
	title: string;
	authors: string[];
	buyLink: string;
	amount: string;
	currencyCode: string | null;
}