describe('Testing Marvel Movie Finder Events', function () {
    jasmine.getFixtures().fixturesPath = '/';

    beforeEach(function () {
        loadFixtures('fixtures.html');
    });

    describe('Last button event handling', function () {
        it('triggers event handler', function () {
            spyEvent = spyOnEvent('#last', 'click');
            $('#last').trigger("click");
            expect(spyEvent).toHaveBeenTriggered();
        });

    });

    describe('Next button event handling', function () {
        it('triggers event handler', function () {
            spyEvent = spyOnEvent('#next', 'click');
            $('#next').trigger("click");
            expect(spyEvent).toHaveBeenTriggered();
        });
    });
});