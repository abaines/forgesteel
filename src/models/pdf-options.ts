export interface PdfOptions {
	mode: 'portrait' | 'landscape' | 'html',
	formFillable?: boolean,
	resolution?: 'standard' | 'high';
	useNotoFont?: boolean; // If true, use Noto Sans for Unicode/emoji support
}
