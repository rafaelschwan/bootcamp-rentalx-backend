interface IDateProvider {
    dateNow(): Date;
    compareInHours(start_date: Date, end_date: Date): number;
    compareInDays(start_date: Date, end_date: Date): number;
    convertToUtc(date: Date): string;
    addDays(days: number): Date;
    addHours(hours: number): Date;
}

export { IDateProvider };
