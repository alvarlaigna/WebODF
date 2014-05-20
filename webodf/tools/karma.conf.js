/*global module, config*/

/**
 * Configuration for running tests in PhantomJS with Karma.
 *
 * To run these tests, install karma with
 *     npm install karma-coverage karma-junit-reporter
 * Then run 'node ../node_modules/.bin/karma start tools/karma.conf.js' from
 * the directory 'webodf' that contains the 'tools' directory.
 * This results in a folder called 'coverage' with the coverage information of
 * the tests.
 */

module.exports = function (config) {
    "use strict";
    config.set({
        basePath: '..',
        autoWatch: true,
        frameworks: ['webodf'],
        files: [
            'lib/runtime.js',
            // MODULES
            'lib/core/Async.js',
            'lib/core/Base64.js',
            'lib/core/ByteArray.js',
            'lib/core/ByteArrayWriter.js',
            'lib/core/CSSUnits.js',
            'lib/core/DomUtils.js',
            'lib/core/Cursor.js',
            'lib/core/Destroyable.js',
            'lib/core/EventNotifier.js',
            'lib/core/LazyProperty.js',
            'lib/core/LoopWatchDog.js',
            'lib/core/PositionIterator.js',
            'lib/core/PositionFilter.js',
            'lib/core/PositionFilterChain.js',
            'lib/core/RawDeflate.js',
            'lib/core/RawInflate.js',
            'lib/core/ScheduledTask.js',
            'lib/core/enums.js',
            'lib/core/StepIterator.js',
            'lib/core/Task.js',
            'lib/core/UnitTester.js',
            'lib/core/Utils.js',
            'lib/core/Zip.js',
            'lib/gui/CommonConstraints.js',
            'lib/gui/SessionConstraints.js',
            'lib/xmldom/LSSerializerFilter.js',
            'lib/odf/OdfNodeFilter.js',
            'lib/odf/Namespaces.js',
            'lib/xmldom/XPath.js',
            'lib/odf/StyleInfo.js',
            'lib/xmldom/LSSerializer.js',
            'lib/odf/OdfContainer.js',
            'lib/odf/OdfUtils.js',
            'lib/gui/AnnotationViewManager.js',
            'lib/odf/FontLoader.js',
            'lib/odf/Formatting.js',
            'lib/odf/StyleTree.js',
            'lib/odf/ListStylesToCss.js',
            'lib/odf/Style2CSS.js',
            'lib/gui/ZoomHelper.js',
            'lib/ops/Canvas.js',
            'lib/odf/OdfCanvas.js',
            'lib/odf/StepUtils.js',
            'lib/ops/Member.js',
            'lib/gui/SelectionMover.js',
            'lib/ops/Document.js',
            'lib/ops/OdtCursor.js',
            'lib/ops/StepsCache.js',
            'lib/ops/OdtStepsTranslator.js',
            'lib/ops/Operation.js',
            'lib/ops/TextPositionFilter.js',
            'lib/ops/OdtDocument.js',
            'lib/ops/OpAddAnnotation.js',
            'lib/ops/OpAddCursor.js',
            'lib/ops/OpAddMember.js',
            'lib/ops/OpAddStyle.js',
            'lib/odf/ObjectNameGenerator.js',
            'lib/odf/TextStyleApplicator.js',
            'lib/ops/OpApplyDirectStyling.js',
            'lib/ops/OpApplyHyperlink.js',
            'lib/ops/OpInsertImage.js',
            'lib/ops/OpInsertTable.js',
            'lib/ops/OpInsertText.js',
            'lib/ops/OpMoveCursor.js',
            'lib/ops/OpRemoveAnnotation.js',
            'lib/ops/OpRemoveBlob.js',
            'lib/ops/OpRemoveCursor.js',
            'lib/ops/OpRemoveHyperlink.js',
            'lib/ops/OpRemoveMember.js',
            'lib/ops/OpRemoveStyle.js',
            'lib/odf/CollapsingRules.js',
            'lib/ops/OpRemoveText.js',
            'lib/ops/OpSetBlob.js',
            'lib/ops/OpSetParagraphStyle.js',
            'lib/ops/OpSplitParagraph.js',
            'lib/ops/OpUpdateMember.js',
            'lib/ops/OpUpdateMetadata.js',
            'lib/ops/OpUpdateParagraphStyle.js',
            'lib/ops/OperationFactory.js',
            'lib/ops/OperationRouter.js',
            'lib/ops/TrivialOperationRouter.js',
            'lib/ops/Session.js',
            'lib/gui/AnnotationController.js',
            'lib/gui/Avatar.js',
            'lib/gui/GuiStepUtils.js',
            'lib/gui/Caret.js',
            'lib/odf/TextSerializer.js',
            'lib/gui/MimeDataExporter.js',
            'lib/gui/Clipboard.js',
            'lib/gui/SessionContext.js',
            'lib/gui/StyleSummary.js',
            'lib/gui/DirectFormattingController.js',
            'lib/gui/KeyboardHandler.js',
            'lib/gui/HyperlinkClickHandler.js',
            'lib/gui/EventManager.js',
            'lib/gui/IOSSafariSupport.js',
            'lib/gui/HyperlinkController.js',
            'lib/gui/ImageController.js',
            'lib/gui/ImageSelector.js',
            'lib/gui/InputMethodEditor.js',
            'lib/gui/MetadataController.js',
            'lib/gui/PasteController.js',
            'lib/odf/WordBoundaryFilter.js',
            'lib/gui/SelectionController.js',
            'lib/gui/TextController.js',
            'lib/gui/UndoManager.js',
            'lib/gui/SessionController.js',
            'lib/gui/CaretManager.js',
            'lib/gui/EditInfoHandle.js',
            'lib/ops/EditInfo.js',
            'lib/gui/EditInfoMarker.js',
            'lib/gui/HyperlinkTooltipView.js',
            'lib/gui/ShadowCursor.js',
            'lib/gui/SelectionView.js',
            'lib/gui/SelectionViewManager.js',
            'lib/gui/SessionView.js',
            'lib/gui/SvgSelectionView.js',
            'lib/gui/UndoStateRules.js',
            'lib/gui/TrivialUndoManager.js',
            'lib/odf/CommandLineTools.js',
            'lib/odf/StyleParseUtils.js',
            'lib/odf/GraphicProperties.js',
            'lib/odf/PageLayoutProperties.js',
            'lib/odf/ParagraphProperties.js',
            'lib/odf/TextProperties.js',
            'lib/odf/StyleCache.js',
            'lib/ops/OperationTransformMatrix.js',
            'lib/ops/OperationTransformer.js',
            'lib/xmldom/RelaxNG.js',
            'lib/xmldom/RelaxNG2.js',
            'lib/xmldom/RelaxNGParser.js', // !
            'tests/*/*.js',
            'tests/tests.js',
            { pattern: 'lib/manifest.json', included: false, watched: false, served: true },
            { pattern: 'tests/manifest.json', included: false, watched: false, served: true },
            { pattern: 'tests/**', served: true, included: false }
        ],
        browsers: ['PhantomJS', 'Chrome', 'Firefox'],
        reporters: ['progress', 'coverage', 'junit'],
        preprocessors: {
            'lib/*.js': ['coverage'],
            'lib/*/*.js': ['coverage'],
            'tests/tests.js': ['coverage'],
            'tests/*/*.js': ['coverage']
        },
        proxies: {
            '/proxy': 'http://localhost:8642'
        },
        urlRoot: '/proxy/',
        singleRun: true
    });
};
