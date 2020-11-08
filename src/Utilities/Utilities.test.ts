import { ValidateImageLink } from './Utilities';

describe('ValidateImageLink', () => {
    let createFetchMock = (blobType: string) => {
        let mockResponse = new Response();
        let mockBlob = new Blob([], { type: blobType });
        mockResponse.blob = () => Promise.resolve(mockBlob)
        return jest.fn(() => Promise.resolve(mockResponse));
    }

    beforeEach(() => {
        console.error = jest.fn();
    })

    test('MissingLink', async () => {
        let errorMessage = await ValidateImageLink('');
        expect(errorMessage).not.toEqual('');
    })

    test('UnableToLoad', async () => {
        let mockResponse = new Response('', {status: 404});
        window.fetch = jest.fn(() => Promise.resolve(mockResponse));
        let errorMessage = await ValidateImageLink('blahblahblah');
        expect(errorMessage).not.toEqual('');
    })

    test('ExceptionHandling', async () => {
        window.fetch = jest.fn().mockImplementationOnce(() => {
            throw new Error('Arbitrary Error');
        });
        let errorMessage = await ValidateImageLink('blahblahblah');
        expect(errorMessage).not.toEqual('');
    })

    test('InvalidBlob', async () => {
        window.fetch = createFetchMock('text/plain');
        let errorMessage = await ValidateImageLink('blahblahblah');
        expect(errorMessage).not.toEqual('');
    })

    test.each(['image/png', 'image/jpeg', 'image/gif'])('ValidImage', async (blobType: string) => {
        window.fetch = createFetchMock(blobType);
        let errorMessage = await ValidateImageLink('blahblahblah');
        expect(errorMessage).toEqual('');
    })
})
